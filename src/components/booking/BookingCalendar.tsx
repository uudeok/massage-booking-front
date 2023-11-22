import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { ko } from "date-fns/esm/locale";
import { getDay } from "date-fns";
import { MEDIA_QUERY } from "../../const/devise";
import { setHours, setMinutes } from "date-fns";
import {
  convertStringsToDates,
  splitMultipleTimeArraysBy30Minutes,
} from "../../util/time";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getMassageDetail } from "../../stores/massageSlice";
import BookingNotice from "./BookingNotice";
import BookingSummary from "./BookingSummary";

type TProps = {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  bookedData: string[];
};

const SUNDAY = 0;

const BookingCalendar = ({
  selectedDate,
  setSelectedDate,
  bookedData,
}: TProps) => {
  const massageDetail = useSelector(getMassageDetail);
  const selectedMassageTime = massageDetail[0].time;

  const changeDateHandler = (date: Date) => {
    setSelectedDate(date);
    setEndTime(dayjs(date).add(selectedMassageTime, "minutes").toDate());
    setIsSelected(true);
  };

  const [endTime, setEndTime] = useState<Date | null>(null);
  const [isSelected, setIsSelected] = useState(false);
  const addTwoWeeks = dayjs().add(2, "weeks").format();

  const isOffDay = (date: Date | number) => {
    const day = getDay(date);
    return day !== SUNDAY;
  };

  const result = splitMultipleTimeArraysBy30Minutes(bookedData);
  const booked = convertStringsToDates(result);

  // const date = dayjs(selectedDate).format("YYYY-MM-DD");

  const massageStartTime = dayjs(selectedDate).format("HH:mm");
  const massageEndTime = dayjs(endTime).format("HH:mm");

  const filterPassedTime = (time: Date) => {
    const currentTime = new Date().getTime();
    const selectedTime = new Date(time).getTime();

    return currentTime < selectedTime;
  };

  return (
    <>
      <CalendarStyle>
        <TitleStyle>날짜 및 시간을 선택해주세요</TitleStyle>
        <CalendarBoxStyle>
          <StyledTimePicker
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
          />
          <HyphenStyle>-</HyphenStyle>
          <StyledTimePicker
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
      {isSelected && (
        <ReservationDetailStyle>
          <TitleStyle>※ 예약 내역</TitleStyle>
          <DetailBoxStyle>
            <BookingNotice />
            <BookingSummary
              selectedDate={selectedDate}
              startTime={massageStartTime}
              endTime={massageEndTime}
            />
          </DetailBoxStyle>
        </ReservationDetailStyle>
      )}
    </>
  );
};

export default BookingCalendar;

const CalendarStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 0 0.3rem 0 rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    flex-direction: column;
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

const StyledTimePicker = styled(DatePicker)`
  font-family: "Pretendard-Regular";
  padding: 0.5rem;
  text-align: center;
  border-radius: 30px;
  font-size: 1rem;
  border: 2px solid #555555;

  /* @media only screen and (max-width: ${MEDIA_QUERY.bigNotebookWidth}) {
    width: 40%;
  } */
`;

const DetailBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    flex-direction: column;
  }
`;

const ReservationDetailStyle = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
