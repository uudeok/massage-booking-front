import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { ko } from "date-fns/esm/locale";
import { getDay } from "date-fns";

interface IProps {
  changeDateHandler: (date: Date) => void;
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

const SUNDAY = 0;

const Calendar = ({ changeDateHandler, selectedDate }: IProps) => {
  const addOneMonth = dayjs().add(2, "weeks").format();

  const isOffDay = (date: Date | number) => {
    const day = getDay(date);
    return day !== SUNDAY;
  };

  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <StyledDatePicker
      dateFormat="yyyy-MM-dd" // 날짜 형태
      shouldCloseOnSelect // 날짜를 선택하면 자동으로 닫힘
      minDate={new Date()} // minDate 이전 날짜 선택 불가
      maxDate={new Date(addOneMonth)} // maxDate 이후 날짜 선택 불가
      selected={selectedDate}
      onChange={changeDateHandler}
      locale={ko}
      filterDate={isOffDay} // 쉬는 요일 선택 불가
      showTimeSelect
      filterTime={filterPassedTime}
    />
  );
};

export default Calendar;

const StyledDatePicker = styled(DatePicker)`
  height: 2rem;
  width: 10rem;
  text-align: center;
  border: none;
  cursor: pointer;
  font-family: "Pretendard-Regular";
  font-size: 1rem;
`;
