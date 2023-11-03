import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { useState, useEffect } from "react";
import { MEDIA_QUERY } from "../../const/devise";
import BookingCalendar from "./BookingCalendar";
import { BOOKING_TIME_TABLE } from "../../const/massage";
import BookingAvailableTime from "./BookingAvailableTime";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { addTabNum } from "../../stores/tabSlice";

const BookingDate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  useEffect(() => {
    // 날짜가 바뀔때마다 가능한 시간대 가져오는 API 호출
    // 예를들어 /?from=선택한날짜&to=선택한날짜&products=선택한 마사지&category=마사지시간

    console.log("날짜가 바뀔때마다 api 호출");
  }, [selectedDate]);

  const changeDateHandler = (date: Date | null) => {
    setSelectedDate(date);
  };

  const fetchReservation = async (timeId: number) => {
    // BookingAvailableTime 컴포넌트에서 시간을 클릭하면 선택한 시간을 가져옴
    console.log(selectedDate, timeId);
    dispatch(addTabNum());
  };

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <PreviousButton />
        <CalendarBoxStyle>
          <BookingCalendar
            changeDateHandler={changeDateHandler}
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
          />
        </CalendarBoxStyle>

        <AvailableBoxStyle>
          <AvailableCircleStyle></AvailableCircleStyle>
          <span> - 가능한 시간</span>
        </AvailableBoxStyle>
        <TimeListBoxStyle>
          {BOOKING_TIME_TABLE.map((item) => (
            <BookingAvailableTime
              key={item.id}
              data={item}
              fetchReservation={fetchReservation}
            />
          ))}
        </TimeListBoxStyle>
      </InnerBoxStyle>
    </ContainerStyle>
  );
};

export default BookingDate;

const ContainerStyle = styled.div`
  display: flex;
  width: 70%;
  margin: 2rem auto;
  font-family: "Pretendard-Regular";
`;

const InnerBoxStyle = styled.div`
  margin: auto;
  width: 50rem;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }
`;

const CalendarBoxStyle = styled.div`
  padding: 1.5rem;
  width: 50rem;
  margin: 2rem auto;
  display: flex;
  height: 6rem;
  align-items: center;
  box-shadow: 0 0 0.3rem 0 rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }
`;

const TimeListBoxStyle = styled.div`
  margin-top: 1rem;
  width: 700px;
  margin: 1rem auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }
`;

const AvailableBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 0.5rem;
`;

const AvailableCircleStyle = styled.div`
  width: 15px;
  height: 15px;
  background-color: #a2c294;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
