import "./Calendar.style.css";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { ko } from "date-fns/esm/locale";

interface IProps {
  changeDateHandler: (date: Date | null) => void;
  selectedDate: Date | null;
}

const Calendar = ({ changeDateHandler, selectedDate }: IProps) => {
  const addOneMonth = dayjs().add(1, "month").format();

  return (
    <StyledDatePicker
      dateFormat="yyyy년 MM월 dd일" // 날짜 형태
      shouldCloseOnSelect // 날짜를 선택하면 자동으로 닫힘
      minDate={new Date()} // minDate 이전 날짜 선택 불가
      maxDate={new Date(addOneMonth)} // maxDate 이후 날짜 선택 불가
      selected={selectedDate}
      onChange={changeDateHandler}
      locale={ko}
    />
  );
};

export default Calendar;

const StyledDatePicker = styled(DatePicker)`
  height: 2rem;
  width: 10rem;
  padding: 1rem;
  text-align: center;
  border: 2px solid #586d2c;
  cursor: pointer;
`;
