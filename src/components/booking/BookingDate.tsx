import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { ITabHandler } from "../../@types/book";
import Calendar from "../common/calendar/Calendar";
import BookingAvailableTimeList from "./BookingAvailableTimeList";

const BookingDate = ({ changeTabHandler }: ITabHandler) => {
  const changeDateHandler = () => {};

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <PreviousButton changeTabHandler={changeTabHandler} tabNum={1} />
        <CalendarBoxStyle>
          <div>‹ 이전 날짜</div>
          <CalendarMiddleBox>
            <Calendar
              changeDateHandler={changeDateHandler}
              selectedDate={new Date()}
            />
          </CalendarMiddleBox>
          <div>다음 날짜 ›</div>
        </CalendarBoxStyle>
        <TimeListBoxStyle>
          <BookingAvailableTimeList />
        </TimeListBoxStyle>
      </InnerBoxStyle>
    </ContainerStyle>
  );
};

export default BookingDate;

const ContainerStyle = styled.div`
  display: flex;
  border: 1px solid black;
  width: 70%;
  margin: auto;
`;

const InnerBoxStyle = styled.div`
  margin: auto;
  padding: 1rem;
  border: 1px solid blue;
`;

const CalendarBoxStyle = styled.div`
  border: 1px solid black;
  padding: 1rem;
  width: 55rem;
  margin: 2rem auto;
  display: flex;
  height: 5rem;
  align-items: center;
`;

const CalendarMiddleBox = styled.div`
  flex: 1;
  text-align: center;
`;

const TimeListBoxStyle = styled.div`
  border: 1px solid black;
  margin-top: 1rem;
`;
