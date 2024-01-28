import { MONTH_NAME } from "../../const/calendar";
import { MONTH_NAME_VALUES } from "../../@types/calendar";
import { getMonthInfo, getDateLabel } from "../../util/date";
import { TimePickerType } from "./timePicker/index";
import { Time } from "../common/dropdown";
import React, { useState } from "react";
import styled from "styled-components";
import DateCell from "./DateCell";
import TimePicker from "./timePicker/index";
import dayjs from "dayjs";
import DayOfWeek from "./DayOfWeek";
import CalendarHeader from "./CalendarHeader";

type CalendarType = {
  onClick: (date: string) => void;
  curMonthOnly?: boolean;
  maxDate?: Date;
  minDate?: Date;
  value?: string;
  filterDate?: (date: string) => boolean;
  showTimePicker?: boolean;
  timeInterval?: number;
  minTime?: string;
  maxTime?: string;
  excludeTimes?: string[];
  placeHolder?: string;
  onHover?: (date: string) => void;
  filterTime?: (time: Time) => boolean;
};

type CalendarWithTimePicker = CalendarType & TimePickerType;

type CalendarWithOutTimePicker = CalendarType & {
  showTimePicker?: false;
  handleTimePicker?: never;
  selectedTime?: never;
};

type CombinedProps = CalendarWithTimePicker | CalendarWithOutTimePicker;

const Calendar = ({
  onClick,
  showTimePicker,
  curMonthOnly,
  minDate,
  maxDate,
  value,
  filterDate,
  timeInterval,
  minTime,
  maxTime,
  excludeTimes,
  handleTimePicker,
  selectedTime,
  placeHolder,
  onHover,
  filterTime,
}: CombinedProps) => {
  const base = value ? new Date(value) : new Date();
  const [curYear, setCurYear] = useState(base.getFullYear());
  const [curMonth, setCurMonth] = useState(base.getMonth());
  const [isSelected, setIsSelected] = useState(false);

  const validFilterDate = (date: string) => {
    if (!filterDate) {
      return true;
    }

    return filterDate(date);
  };

  const validPassedDate = (selectedMonth: number, cellDate: number) => {
    if (!minDate) {
      return false;
    }

    const thisYear = minDate.getFullYear();
    const thisMonth = minDate.getMonth();
    const today = minDate.getDate();

    if (curYear < thisYear) {
      return true;
    }

    if (curYear > thisYear) {
      return false;
    }

    if (curYear === thisYear) {
      if (selectedMonth < thisMonth) {
        return true;
      }

      if (selectedMonth === thisMonth && cellDate < today) {
        return true;
      }
    }
    return false;
  };

  const validOverDate = (date: string) => {
    if (!maxDate) {
      return true;
    }

    // <-! 순수하게 날짜만 비교하기 위해 !->
    const targetDate = new Date(date).setHours(0);
    const max = new Date(maxDate).setHours(0);

    if (targetDate === max || targetDate < max) {
      return true;
    }
  };

  const getSelectedMonth = (month: MONTH_NAME_VALUES, curMonth: number) => {
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

  const handleDate = (e: React.MouseEvent): void => {
    setIsSelected(true);
    const cell = e.target as HTMLTableElement;
    const date = cell.textContent!.padStart(2, "0");
    const month = cell.dataset.name as MONTH_NAME_VALUES;

    if (!month) {
      return;
    }

    const selectedMonth = getSelectedMonth(month, curMonth);

    let selectedYear = curYear;

    if (month === "next" && selectedMonth === 0) {
      selectedYear = curYear + 1;
    } else if (month === "prev" && selectedMonth === 11) {
      selectedYear = curYear - 1;
    }

    const formattedMonth = (selectedMonth + 1).toString().padStart(2, "0");

    const pickDate = getDateLabel(`${selectedYear}-${formattedMonth}-${date}`);

    onClick(pickDate);
  };

  const renderDateCell = () => {
    const cells = [];
    const cellRows = [];

    const { firstDay, lastDay } = getMonthInfo(curYear, curMonth);

    let dateLabel = new Date(curYear, curMonth, 1 - firstDay).getDate();
    let cellCount = 0;
    let monthName = MONTH_NAME.PREV as MONTH_NAME_VALUES;
    // <--! 이전 월의 날짜부터 시작하므로 현재 월에서 -1를 해주고 시작한다 !-->
    let month = curMonth - 1;

    while (cellCount < 42) {
      if (cellCount === firstDay) {
        dateLabel = 1;
        month++;
        monthName = MONTH_NAME.CURRENT;
      }

      if (cellCount > firstDay && dateLabel > lastDay) {
        dateLabel = 1;
        month++;
        monthName = MONTH_NAME.NEXT;
      }

      const renderingDate = dayjs(new Date(curYear, month, dateLabel)).format(
        "YYYY-MM-DD"
      );

      const filteredDate = validFilterDate(renderingDate);
      const isPassedDate = validPassedDate(month, dateLabel);
      const isSafeDate = validOverDate(renderingDate);
      const today = dayjs();

      cells.push(
        <DateCell
          $isToday={today.isSame(new Date(curYear, month, dateLabel), "day")}
          dateLabel={`${dateLabel}`}
          disabled={isPassedDate || !isSafeDate || !filteredDate}
          monthName={monthName}
          key={cellCount}
          curMonthOnly={curMonthOnly}
          selected={value === renderingDate}
          onMouseOver={() => onHover && onHover(renderingDate)}
        />
      );

      dateLabel++;
      cellCount++;
    }

    // <--! cells.length 가 있을때까지 while 문 반복 !-->
    while (cells.length) {
      const row = cells.splice(0, 7);
      cellRows.push(<tr key={cells.length}>{row}</tr>);
    }

    return cellRows;
  };

  return (
    <Self>
      <CalendarHeader
        curYear={curYear}
        curMonth={curMonth}
        setCurYear={setCurYear}
        setCurMonth={setCurMonth}
      />
      <Table>
        <DayOfWeek />
        <tbody onClick={handleDate}>{renderDateCell()}</tbody>
      </Table>
      {showTimePicker && (
        <TimePicker
          handleTimePicker={handleTimePicker}
          timeInterval={timeInterval}
          minTime={minTime}
          maxTime={maxTime}
          excludeTimes={excludeTimes}
          selectedTime={selectedTime}
          placeHolder={placeHolder}
          selectable={isSelected}
          filterTime={filterTime}
        />
      )}
    </Self>
  );
};

export default Calendar;

const Self = styled.div`
  position: absolute;
  text-align: center;
  display: block;
  cursor: pointer;
  font-size: 13px;
`;

const Table = styled.table`
  border-collapse: collapse;
  background-color: white;
  padding: 0.5rem;
`;
