import CalendarHeader from "./CalendarHeader";
import { useState } from "react";

const Calendar = () => {
  const base = new Date();
  const [curYear, setCurYear] = useState(base.getFullYear());
  const [curMonth, setCurMonth] = useState(base.getMonth());

  return (
    <>
      <CalendarHeader
        curYear={curYear}
        curMonth={curMonth}
        setCurYear={setCurYear}
        setCurMonth={setCurMonth}
      />
    </>
  );
};

export default Calendar;
