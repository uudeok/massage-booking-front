import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { setHours, setMinutes } from "date-fns";
import { addFewMinutes, makeSimpleTime, isTimeOverlaps } from "../../util/time";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMassageDetail } from "../../stores/massageSlice";
import { useGetBookedTimeListQuery } from "../../api/book/bookQuery";
import LoadingBar from "../loading/LoadingBar";
import BookingBreakDown from "./BookingBreakDown";
import { CLOSE_TIME } from "../../const/book/time";
import {
  spreadBookedData,
  makeSimpleDate,
  calculateBookedData,
} from "../../util/date";
import { font } from "../../fonts/font";
import CommonButton from "../common/button/CommonButton";
import { AppDispatch } from "../../stores/store";
import { subTabNum } from "../../stores/tabSlice";
import { ORDER_ERROR_MESSAGE } from "../../const/book/errorMessage";
import BookingStartTimePicker from "./BookingStartTimePicker";
import BookingEndTimePicker from "./BookingEndTimePicker";
import Title from "./Title";

const BookingDate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const massageDetail = useSelector(getMassageDetail);
  const selectedMassageTime = massageDetail[0].time;

  const [selectedDate, setSelectedDate] = useState<Date>(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [isSelected, setIsSelected] = useState(false);
  const [error, setError] = useState("");
  const [booked, setBooked] = useState<Date[]>([]);

  const targetDate = makeSimpleDate(selectedDate);

  const { data: bookedData } = useGetBookedTimeListQuery(targetDate);

  useEffect(() => {
    if (bookedData) {
      setBooked(calculateBookedData(bookedData));
    }
  }, [bookedData]);

  if (!bookedData) return <LoadingBar />;

  const validBusinessTime = (date: Date) => {
    const start = makeSimpleTime(date);

    if (start === "19:30" && 90 < selectedMassageTime) {
      setError(ORDER_ERROR_MESSAGE.notice_over_time);
    } else if (start === "20:00" && 60 < selectedMassageTime) {
      setError(ORDER_ERROR_MESSAGE.notice_over_time);
    } else if (start === "20:30") {
      setError(ORDER_ERROR_MESSAGE.notice_available_time);
    } else if (start === CLOSE_TIME) {
      setError(ORDER_ERROR_MESSAGE.notice_business_time);
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
      setError(ORDER_ERROR_MESSAGE.notice_past_time);
      return false;
    }

    if (result.length > 0) {
      setError(ORDER_ERROR_MESSAGE.notice_overlap_time);
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

  return (
    <ContainerStyle>
      <CommonButton type="plain" onClickButton={() => dispatch(subTabNum())}>
        뒤로가기
      </CommonButton>
      <CalendarStyle>
        <Title>날짜 및 시간을 선택해주세요</Title>
        <CalendarBoxStyle>
          <BookingStartTimePicker
            selectedDate={selectedDate}
            changeDateHandler={changeDateHandler}
            booked={booked}
          />
          <HyphenStyle>-</HyphenStyle>
          <BookingEndTimePicker endTime={endTime} setEndTime={setEndTime} />
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

export default BookingDate;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
  margin: 2rem auto;
  font-family: ${font.pretend};

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

const ErrorMessageStyle = styled.span`
  text-align: center;
  padding: 1rem;
  color: tomato;
`;
