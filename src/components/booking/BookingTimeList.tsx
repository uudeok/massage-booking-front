import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import { setHours, setMinutes } from "date-fns";
import { ko } from "date-fns/esm/locale";
import { MEDIA_QUERY } from "../../const/devise";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { getMassageDetail } from "../../stores/massageSlice";
import "./Calendar.css";
import {
  convertStringsToDates,
  splitMultipleTimeArraysBy30Minutes,
} from "../../util/time";

type TProps = {
  bookedData: string[];
};

const BookingTimeList = ({ bookedData }: TProps) => {
  const getMassageTime = useSelector(getMassageDetail);
  const selectedTime = getMassageTime[0].time;
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  useEffect(() => {
    setStartTime(null);
    setEndTime(null);
  }, [bookedData]);

  const result = splitMultipleTimeArraysBy30Minutes(bookedData);
  const booked = convertStringsToDates(result);
  console.log(booked);

  const changeStartTimeHandler = (time: Date | null) => {
    setStartTime(time);
    setEndTime(dayjs(time).add(selectedTime, "minutes").toDate());
  };

  return (
    <CalendarStyle>
      <TitleStyle>2. 시간을 선택해주세요</TitleStyle>
      <CalendarBoxStyle>
        <StartTimeBoxStyle>
          <StyledStartTimePicker
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
            excludeTimes={booked}
          />
        </StartTimeBoxStyle>
        <EndTimeBoxStyle>
          <StyledEndTimePicker
            showTimeSelect
            showTimeSelectOnly
            selected={endTime}
            onChange={(time) => setEndTime(time)}
            placeholderText="종료 시간"
            dateFormat="aa h:mm 종료"
            locale={ko}
            disabled
          />
        </EndTimeBoxStyle>
      </CalendarBoxStyle>
    </CalendarStyle>
  );
};

export default BookingTimeList;

const CalendarStyle = styled.div`
  width: 50%;
  text-align: center;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
    margin-top: 3rem;
  }
`;

const TitleStyle = styled.h2`
  font-size: 1.3rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const CalendarBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
`;

const StyledStartTimePicker = styled(DatePicker)`
  font-family: "Pretendard-Regular";
  padding: 0.5rem;
  text-align: center;
  border-radius: 30px;
  font-size: 1rem;
  border: 2px solid #555555;

  @media only screen and (max-width: ${MEDIA_QUERY.bigNotebookWidth}) {
    width: 60%;
  }
`;

const StyledEndTimePicker = styled(DatePicker)`
  font-family: "Pretendard-Regular";
  padding: 0.5rem;
  text-align: center;
  border-radius: 30px;
  font-size: 1rem;
  border: 3px solid lightgrey;
  color: grey;

  @media only screen and (max-width: ${MEDIA_QUERY.bigNotebookWidth}) {
    width: 60%;
  }
`;

const StartTimeBoxStyle = styled.div`
  padding: 1rem;
`;

const EndTimeBoxStyle = styled.div`
  padding: 1rem;
`;
