import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ICalendar } from "../../../@types/common";
import dayjs from "dayjs";
import "./Calendar.style.css";

const Calendar = ({ changeDateHandler, selectedDate }: ICalendar) => {
  const date = new Date();
  const addOneMonth = dayjs().add(1, "month").format();

  return (
    <DatePicker
      dateFormat="yyyy.MM.dd" // 날짜 형태
      shouldCloseOnSelect // 날짜를 선택하면 자동으로 닫힘
      minDate={new Date(date)} // minDate 이전 날짜 선택 불가
      maxDate={new Date(addOneMonth)} // maxDate 이후 날짜 선택 불가
      selected={selectedDate}
      onChange={changeDateHandler}
      showTimeSelect
      timeFormat="HH:mm"
    />
  );
};

export default Calendar;
