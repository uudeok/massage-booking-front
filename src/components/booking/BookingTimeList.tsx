import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { setHours, setMinutes } from "date-fns";
import { ko } from "date-fns/esm/locale";
import { MEDIA_QUERY } from "../../const/devise";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { getMassageDetail } from "../../stores/massageSlice";

const BookingTimeList = () => {
  const getMassageTime = useSelector(getMassageDetail);
  const selectedTime = getMassageTime[0].time;
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  const changeStartTimeHandler = (time: Date | null) => {
    setStartTime(time);
    setEndTime(dayjs(time).add(selectedTime, "minutes").toDate());
  };

  const changeEndTimeHandler = (time: Date | null) => {};

  return (
    <CalendarStyle>
      <TitleStyle>2. 시간을 선택해주세요</TitleStyle>
      <CalendarBoxStyle>
        <StyledStartPicker
          showTimeSelect
          showTimeSelectOnly
          selected={startTime}
          onChange={changeStartTimeHandler}
          timeIntervals={30}
          placeholderText="시작 시간"
          minTime={setHours(setMinutes(new Date(), 0), 9)}
          maxTime={setHours(setMinutes(new Date(), 0), 21)}
          timeCaption="시간"
          dateFormat="aa h:mm 시작"
          locale={ko}
        />
        <StyledEndTimePicker
          showTimeSelect
          showTimeSelectOnly
          selected={endTime}
          onChange={changeEndTimeHandler}
          placeholderText="종료 시간"
          timeCaption="시간"
          dateFormat="aa h:mm 종료"
          locale={ko}
          disabled
        />
      </CalendarBoxStyle>
    </CalendarStyle>
  );
};

export default BookingTimeList;

const StyledStartPicker = styled(DatePicker)`
  font-family: "Pretendard-Regular";
  padding: 0.5rem;
  text-align: center;
  border-radius: 30px;
  font-size: 1rem;
  margin-top: 1rem;
  width: 70%;
  border: 2px solid #afc9a4;
`;

const StyledEndTimePicker = styled(DatePicker)`
  font-family: "Pretendard-Regular";
  padding: 0.5rem;
  text-align: center;
  border-radius: 30px;
  font-size: 1rem;
  margin-top: 1rem;
  width: 70%;
  border: 1px solid #555555;
`;

const CalendarStyle = styled.div`
  padding: 1rem;
  width: 33%;
  text-align: center;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }
`;

const TitleStyle = styled.h2`
  font-size: 1.3rem;
  padding: 0.5rem;
`;

const CalendarBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
