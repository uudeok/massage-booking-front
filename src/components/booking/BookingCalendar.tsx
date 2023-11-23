import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { ko } from "date-fns/esm/locale";
import { MEDIA_QUERY } from "../../const/devise";
import { setHours, setMinutes, getDay } from "date-fns";
import {
  convertStringsToDates,
  splitMultipleTimeArraysBy30Minutes,
  spreadBookedData,
} from "../../util/time";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getMassageDetail } from "../../stores/massageSlice";
import { useGetBookedTimeListQuery } from "../../api/book/bookQuery";
import LoadingBar from "../common/loading/LoadingBar";
import { makeSimpleDate } from "../../util/date";

const SUNDAY = 0;

type TProps = {
  selectedDate: Date | any;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  changeDateHandler: (date: Date) => void;
  endTime: Date | any;
  setEndTime: React.Dispatch<React.SetStateAction<Date | any>>;
};

const BookingCalendar = ({
  selectedDate,
  setSelectedDate,
  changeDateHandler,
  endTime,
  setEndTime,
}: TProps) => {
  const addTwoWeeks = dayjs().add(2, "weeks").format();

  const targetDate = makeSimpleDate(selectedDate);
  const { data: bookedData } = useGetBookedTimeListQuery(targetDate);

  if (!bookedData) return <LoadingBar />;

  const result = splitMultipleTimeArraysBy30Minutes(bookedData);
  const booked = convertStringsToDates(result);

  const isOffDay = (date: Date | number) => {
    const day = getDay(date);
    return day !== SUNDAY;
  };

  const filterPassedTime = (time: Date) => {
    const currentTime = new Date().getTime();
    const selectedTime = new Date(time).getTime();

    return currentTime < selectedTime;
  };

  return (
    <>
      <TitleStyle>날짜 및 시간을 선택해주세요</TitleStyle>
      <CalendarBoxStyle>
        <StyledTimePicker
          dateFormat="yyyy-MM-dd aa h:mm"
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
          placeholderText="시작 시간"
          onKeyDown={(e) => e.preventDefault()}
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
    </>
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
