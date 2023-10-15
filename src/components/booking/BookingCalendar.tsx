import styled from "styled-components";
import { DEVISE_SIZE } from "../../const/devise";
import Calendar from "../common/calendar/Calendar";
import dayjs from "dayjs";
import { IBookingCalendar } from "../../@types/book";

const BookingCalendar = ({
  changeDateHandler,
  setSelectedDate,
  selectedDate,
}: IBookingCalendar) => {
  const subOneDay = dayjs(selectedDate).subtract(1, "day").format();
  const addOneDay = dayjs(selectedDate).add(1, "day").format();

  return (
    <>
      <ArrowBoxStyle>
        <span>«</span>
        <ArrowButtonStyle onClick={() => setSelectedDate(new Date(subOneDay))}>
          이전 날짜
        </ArrowButtonStyle>
      </ArrowBoxStyle>

      <CalendarMiddleBoxStyle>
        <Calendar
          changeDateHandler={changeDateHandler}
          selectedDate={selectedDate}
        />
      </CalendarMiddleBoxStyle>

      <ArrowBoxStyle>
        <ArrowButtonStyle onClick={() => setSelectedDate(new Date(addOneDay))}>
          다음 날짜
        </ArrowButtonStyle>
        <span>»</span>
      </ArrowBoxStyle>
    </>
  );
};

export default BookingCalendar;

const ArrowBoxStyle = styled.div`
  /* border: 2px solid #586d2c; */
  padding: 0.3rem;
  height: 2rem;
`;

const ArrowButtonStyle = styled.button`
  border: none;
  background-color: white;

  @media only screen and (max-width: ${DEVISE_SIZE.mobileWidthMax}) {
    display: none;
  }
`;

const CalendarMiddleBoxStyle = styled.div`
  flex: 1;
  text-align: center;
`;
