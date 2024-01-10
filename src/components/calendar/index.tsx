import CalendarHeader from "./CalendarHeader";
import styled from "styled-components";
import { useState } from "react";
import CalendarBody from "./CalendarBody";

type CalendarType = {
  onClick: (date: string, e?: React.MouseEvent) => void;
};

const Calendar = ({ onClick }: CalendarType) => {
  const base = new Date();
  const [curYear, setCurYear] = useState(base.getFullYear());
  const [curMonth, setCurMonth] = useState(base.getMonth());

  return (
    <Self>
      <CalendarHeader
        curYear={curYear}
        curMonth={curMonth}
        setCurYear={setCurYear}
        setCurMonth={setCurMonth}
      />
      <CalendarBody curYear={curYear} curMonth={curMonth} onClick={onClick} />
    </Self>
  );
};

export default Calendar;

const Self = styled.div`
  position: absolute;
  text-align: center;
  display: block;
  cursor: pointer;
  font-size: 15px;
`;
