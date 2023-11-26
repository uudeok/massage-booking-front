import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { ko } from "date-fns/esm/locale";
import { MEDIA_QUERY } from "../../const/devise";
import { setHours, setMinutes, getDay } from "date-fns";
import {
  addFewMinutes,
  makeSimpleTime,
  isTimeOverlaps,
  splitTimeArraysBy30Minutes,
} from "../../util/time";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getMassageDetail } from "../../stores/massageSlice";
import { useGetBookedTimeListQuery } from "../../api/book/bookQuery";
import LoadingBar from "../common/loading/LoadingBar";
import PreviousButton from "../common/button/PreviousButton";
import { makeSimpleDate } from "../../util/date";
import BookingBreakDown from "./BookingBreakDown";
import { CLOSE_TIME } from "../../const/book/time";
import "./styles/Calendar.css";
import { spreadBookedData, convertStringsToDates } from "../../util/date";

const SUNDAY = 0;

const BookingCalendar = () => {
  const massageDetail = useSelector(getMassageDetail);
  const selectedMassageTime = massageDetail[0].time;

  const [selectedDate, setSelectedDate] = useState<Date>(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [isSelected, setIsSelected] = useState(false);
  const [error, setError] = useState("");

  const addTwoWeeks = dayjs().add(2, "weeks").format();

  const targetDate = makeSimpleDate(selectedDate);
  const { data: bookedData } = useGetBookedTimeListQuery(targetDate);

  if (!bookedData) return <LoadingBar />;

  const validBusinessTime = (date: Date) => {
    const start = makeSimpleTime(date);

    if (start === "19:30" && 90 < selectedMassageTime) {
      setError("마사지 시간이 영업시간을 초과합니다.");
    } else if (start === "20:00" && 60 < selectedMassageTime) {
      setError("마사지 시간이 영업시간을 초과합니다.");
    } else if (start === "20:30") {
      setError("마사지를 받을 수 있는 시간이 아닙니다.");
    } else if (start === CLOSE_TIME) {
      setError("영업시간은 09:00 ~ 21:00 까지 입니다.");
    } else {
      return true;
    }
  };

  const validTimeRange = (date: Date) => {
    const start = makeSimpleTime(date);
    const end = addFewMinutes(date, selectedMassageTime).format("HH:mm");
    const spreadData = spreadBookedData(bookedData);
    const result = isTimeOverlaps(spreadData, start, end);

    if (date < new Date()) {
      setError("오늘보다 이전 날짜는 선택하실 수 없습니다.");
      return false;
    }

    if (result.length > 0) {
      setError("시간이 중복됩니다. 다른 시간을 선택해주세요");
      return false;
    }
    return true;
  };

  const changeDateHandler = (date: Date) => {
    setError("");
    setIsSelected(false);
    setSelectedDate(date);
    setEndTime(addFewMinutes(date, selectedMassageTime).toDate());
    const isValid = validBusinessTime(date);
    if (!isValid) return;
    if (bookedData.length !== 0) {
      const result = validTimeRange(date);
      if (!result) return;
    }

    setIsSelected(true);
  };

  const isOffDay = (date: Date | number) => {
    const day = getDay(date);
    return day !== SUNDAY;
  };

  const result = splitTimeArraysBy30Minutes(bookedData);
  const booked = convertStringsToDates(result);

  const filterPassedTime = (time: Date) => {
    const currentTime = new Date().getTime();
    const selectedTime = new Date(time).getTime();

    return currentTime < selectedTime;
  };

  return (
    <ContainerStyle>
      <PreviousButton />
      <CalendarStyle>
        <TitleStyle>날짜 및 시간을 선택해주세요</TitleStyle>
        <CalendarBoxStyle>
          <StyledStartTimePicker
            dateFormat="yyyy-MM-dd aa h:mm "
            minDate={new Date()}
            maxDate={new Date(addTwoWeeks)}
            selected={selectedDate}
            onChange={changeDateHandler}
            locale={ko}
            filterDate={isOffDay}
            showTimeSelect
            minTime={setHours(setMinutes(new Date(), 0), 9)}
            maxTime={setHours(setMinutes(new Date(), 0), 21)}
            timeCaption="시간"
            excludeTimes={booked}
            filterTime={filterPassedTime}
            onKeyDown={(e) => e.preventDefault()}
            dateFormatCalendar="yyyy년 MM월"
          />
          <HyphenStyle>-</HyphenStyle>
          <StyledEndTimePicker
            showTimeSelect
            locale={ko}
            selected={endTime}
            onChange={(time) => setEndTime(time)}
            placeholderText="종료 시간"
            dateFormat="yyyy-MM-dd aa h:mm "
            disabled
          />
        </CalendarBoxStyle>
      </CalendarStyle>
      {error && <ErrorMessageStyle>{error}</ErrorMessageStyle>}
      {isSelected && (
        <BookingBreakDown
          selectedDate={selectedDate}
          massageEndTime={endTime}
        />
      )}
    </ContainerStyle>
  );
};

export default BookingCalendar;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
  margin: 2rem auto;
  font-family: "Pretendard-Regular";

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }
`;

const CalendarStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 0 0.3rem 0 rgba(0, 0, 0, 0.2);
  margin-top: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    flex-direction: column;
    text-align: center;
  }
`;

const TitleStyle = styled.h2`
  font-size: 1.3rem;
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
`;

const CalendarBoxStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  text-align: center;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    flex-direction: column;
  }
`;

const HyphenStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledStartTimePicker = styled(DatePicker)`
  font-family: "Pretendard-Regular";
  padding: 0.5rem;
  text-align: center;
  border-radius: 30px;
  font-size: 1rem;
  border: 2px solid #555555;
  cursor: pointer;
  /* gap: 1rem; */

  &:focus {
    border: 2px solid blue;
  }
`;

const StyledEndTimePicker = styled(DatePicker)`
  font-family: "Pretendard-Regular";
  padding: 0.5rem;
  text-align: center;
  border-radius: 30px;
  font-size: 1rem;
  border: 2px solid #555555;
  cursor: pointer;
`;

const ErrorMessageStyle = styled.span`
  text-align: center;
  padding: 1rem;
  color: tomato;
`;
