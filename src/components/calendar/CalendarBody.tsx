import DayOfWeek from "./DayOfWeek";
import styled from "styled-components";
import { MONTH_NAME } from "../../const/calendar";
import { MONTH_NAME_VALUES } from "../../@types/calendar";
import { format, isToday } from "date-fns";
import React, { ReactElement, useState } from "react";
import DateCell from "./DateCell";

type TProps = {
  curMonth: number;
  curYear: number;
  value?: string;
  baseDate?: string;
  curMonthOnly?: boolean;
  onClick: (date: string, e?: React.MouseEvent) => void;
  mode?: "duration";
};

const CalendarBody: React.FC<TProps> = ({
  curMonth,
  curYear,
  value,
  baseDate,
  curMonthOnly,
  onClick,
  mode,
}) => {
  const [rows, setCellRows] = useState<ReactElement[]>([]);

  const calculateMonthInfo = (curYear: number, curMonth: number) => {
    const firstDay = new Date(curYear, curMonth).getDay();
    const numOfDays = new Date(curYear, curMonth + 1, 0).getDate();

    return { firstDay, numOfDays };
  };

  const calculateSelectedMonth = (
    month: MONTH_NAME_VALUES,
    curMonth: number
  ) => {
    switch (month) {
      case MONTH_NAME.PREV:
        return curMonth === 0 ? 11 : curMonth - 1;
      case MONTH_NAME.CURRENT:
        return curMonth;
      case MONTH_NAME.NEXT:
        return curMonth === 11 ? 0 : curMonth + 1;
      default:
        throw new Error("error : Calendar.invalidMonthName");
    }
  };

  const handleClickDate = (e: React.MouseEvent): void => {
    const cell = e.target as HTMLTableElement;
    const date = cell.textContent!.padStart(2, "0");
    const month = cell.dataset.name as MONTH_NAME_VALUES;

    if (!month) {
      return;
    }

    const selectedMonth = calculateSelectedMonth(month, curMonth);
    let selectedYear = curYear;

    if (month === "next" && selectedMonth === 0) {
      selectedYear = curYear + 1;
    } else if (month === "prev" && selectedMonth === 11) {
      selectedYear = curYear - 1;
    }

    const formattedMonth = (selectedMonth + 1).toString().padStart(2, "0");

    // getDateLabel utils 함수
    // const pickDate = getDateLabel(`${selectedYear}-${formattedMonth}-${date}`)
    const pickDate = `${selectedYear}-${formattedMonth}-${date}`;

    onClick(pickDate, e);
  };

  const renderCells = () => {
    const cells = [];
    const cellRows = [];

    const { firstDay, numOfDays } = calculateMonthInfo(curYear, curMonth);

    let dateLabel = new Date(curYear, curMonth, -(firstDay - 1)).getDate();
    let cellCount = 0;
    let monthName = MONTH_NAME.PREV as MONTH_NAME_VALUES;
    let month = curMonth - 1;

    while (cellCount < 42) {
      if (cellCount === firstDay) {
        dateLabel = 1;
        month++;
        monthName = MONTH_NAME.CURRENT;
      }

      if (cellCount > firstDay && dateLabel > numOfDays) {
        dateLabel = 1;
        month++;
        monthName = MONTH_NAME.NEXT;
      }

      const renderingDate = format(
        new Date(curYear, month, dateLabel),
        "yyyy-MM-dd"
      );

      cells.push(
        <DateCell
          isToday={isToday(new Date(curYear, month, dateLabel))}
          dateLabel={`${dateLabel}`}
          disabled={false}
          monthName={monthName}
          selected={value === renderingDate}
          key={cellCount}
          curMonthOnly={curMonthOnly}
        />
      );

      dateLabel++;
      cellCount++;
    }

    while (cells.length) {
      const row = cells.splice(0, 7);
      cellRows.push(<tr key={cells.length}>{row}</tr>);
    }

    return cellRows;
  };

  return (
    <Table>
      <DayOfWeek />
      <tbody onClick={handleClickDate}>
        {mode === "duration" ? rows : renderCells()}
      </tbody>
    </Table>
  );
};

export default CalendarBody;

const Table = styled.table`
  border-collapse: collapse;
  background-color: white;
  padding: 0.5rem;

  td {
    font-size: 14px;
    line-height: 20px;
  }
`;
