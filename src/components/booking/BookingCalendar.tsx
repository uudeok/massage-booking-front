import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { ko } from "date-fns/esm/locale";
import { getDay } from "date-fns";
import { MEDIA_QUERY } from "../../const/devise";

type TProps = {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
};

const SUNDAY = 0;

const BookingCalendar = ({ selectedDate, setSelectedDate }: TProps) => {
  const changeDateHandler = (date: Date) => {
    setSelectedDate(date);
  };

  const addTwoWeeks = dayjs().add(2, "weeks").format();

  const isOffDay = (date: Date | number) => {
    const day = getDay(date);
    return day !== SUNDAY;
  };

  return (
    <CalendarStyle>
      <TitleStyle>1. 날짜를 선택해주세요</TitleStyle>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        minDate={new Date()}
        maxDate={new Date(addTwoWeeks)}
        selected={selectedDate}
        onChange={changeDateHandler}
        locale={ko}
        filterDate={isOffDay}
        inline
      />
    </CalendarStyle>
  );
};

export default BookingCalendar;

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
