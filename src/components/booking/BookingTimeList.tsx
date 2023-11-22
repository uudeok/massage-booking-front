import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import { getHours, getMinutes, setHours, setMinutes } from "date-fns";
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
  const selectedMassageTime = getMassageTime[0].time;

  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  useEffect(() => {
    setStartTime(null);
    setEndTime(null);
  }, [bookedData]);

  const result = splitMultipleTimeArraysBy30Minutes(bookedData);
  const booked = convertStringsToDates(result);

  const changeStartTimeHandler = (time: Date | null) => {
    setStartTime(time);
    setEndTime(dayjs(time).add(selectedMassageTime, "minutes").toDate());
  };

  const filterPassedTime = (time: Date) => {
    const currentTime = new Date().getTime();
    const selectedTime = new Date(time).getTime();

    return currentTime < selectedTime;
  };

  return (
    <CalendarStyle>
      <TitleStyle>시간을 선택해주세요</TitleStyle>
      <CalendarBoxStyle>
        <StartTimeBoxStyle>
          <StyledTimePicker
            showTimeSelect
            showTimeSelectOnly
            locale={ko}
            selected={startTime}
            onChange={changeStartTimeHandler}
            placeholderText="시작 시간"
            minTime={setHours(setMinutes(new Date(), 0), 9)}
            maxTime={setHours(setMinutes(new Date(), 0), 21)}
            timeCaption="시간"
            dateFormat="aa h:mm 시작"
            excludeTimes={booked}
            filterTime={filterPassedTime}
          />
        </StartTimeBoxStyle>
        <EndTimeBoxStyle>
          <StyledTimePicker
            showTimeSelect
            showTimeSelectOnly
            locale={ko}
            selected={endTime}
            onChange={(time) => setEndTime(time)}
            placeholderText="종료 시간"
            dateFormat="aa h:mm 종료"
            disabled
          />
        </EndTimeBoxStyle>
      </CalendarBoxStyle>
    </CalendarStyle>
  );
};

export default BookingTimeList;

const CalendarStyle = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 0.3rem 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin-top: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    flex-direction: column;
  }
`;

const TitleStyle = styled.h2`
  font-size: 1.3rem;
  width: 30%;
  text-align: center;

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const CalendarBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  /* border: 1px solid black; */

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    flex-direction: column;
  }
`;

const StyledTimePicker = styled(DatePicker)`
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

const StartTimeBoxStyle = styled.div`
  padding: 1rem;
`;

const EndTimeBoxStyle = styled.div`
  padding: 1rem;
`;
