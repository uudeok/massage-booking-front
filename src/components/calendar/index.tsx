import styled from "styled-components";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import theme from "../../styles/theme";
import DayOfWeek from "./DayOfWeek";
import { MONTH_NAME } from "../../const/calendar";
import { MONTH_NAME_VALUES } from "../../@types/calendar";
import React, { useState } from "react";
import DateCell from "./DateCell";
import TimePicker from "./timePicker/index";
import {
  getMonthLabel,
  calculateMonthInfo,
  getDateLabel,
} from "../../util/date";
import dayjs from "dayjs";
import { TimePickerType } from "./timePicker/index";
import { Time } from "../common/dropdown";

type CalendarType = {
  onClick: (date: string, e?: React.MouseEvent) => void;
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

type CalendarWithTimePicker = CalendarType & {
  showTimePicker: true;
} & TimePickerType;

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

  const validIsPassedDate = (selectedMonth: number, cellDate: number) => {
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
      } else if (selectedMonth === thisMonth && cellDate < today) {
        return true;
      }
    }
    return false;
  };

  const validIsDateBeyondMax = (date: string) => {
    if (!maxDate) {
      return true;
    }

    const targetDate = new Date(date).setHours(0);
    const max = new Date(maxDate).setHours(0);

    if (targetDate === max || targetDate < max) {
      return true;
    }
  };

  const handleClickPrevButton = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (curMonth === 0) {
      setCurYear(curYear - 1);
      setCurMonth(11);
    } else {
      setCurMonth(curMonth - 1);
    }
  };

  const handleClickNextButton = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (curMonth === 11) {
      setCurYear(curYear + 1);
      setCurMonth(0);
    } else {
      setCurMonth(curMonth + 1);
    }
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
    setIsSelected(true);
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

    const pickDate = getDateLabel(`${selectedYear}-${formattedMonth}-${date}`);

    // <--! 날짜 선택할때마다 timePicker 초기화 !-->
    if (handleTimePicker) {
      handleTimePicker("");
    }

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

      const renderingDate = dayjs(new Date(curYear, month, dateLabel)).format(
        "YYYY-MM-DD"
      );

      const filteredDate = validFilterDate(renderingDate);
      const isPassed = validIsPassedDate(month, dateLabel);
      const isSafeDate = validIsDateBeyondMax(renderingDate);
      const today = dayjs();

      cells.push(
        <DateCell
          $isToday={today.isSame(new Date(curYear, month, dateLabel), "day")}
          dateLabel={`${dateLabel}`}
          disabled={isPassed || !isSafeDate || !filteredDate}
          monthName={monthName}
          key={cellCount}
          curMonthOnly={curMonthOnly}
          selected={value === renderingDate}
          onMouseEnter={() => onHover && onHover(renderingDate)}
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

  if (showTimePicker) {
    return (
      <Self>
        <Header>
          <ControllerButton onClick={handleClickPrevButton}>
            <IoChevronBackCircleOutline />
          </ControllerButton>
          <Title>
            {curYear}년 {getMonthLabel(curYear, curMonth, "short")}
          </Title>
          <ControllerButton onClick={handleClickNextButton}>
            <IoChevronForwardCircleOutline />
          </ControllerButton>
        </Header>

        <Table>
          <DayOfWeek />
          <tbody onClick={handleClickDate}>{renderCells()}</tbody>
        </Table>
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
      </Self>
    );
  } else {
    return (
      <Self>
        <Header>
          <ControllerButton onClick={handleClickPrevButton}>
            <IoChevronBackCircleOutline />
          </ControllerButton>
          <Title>
            {curYear}년 {getMonthLabel(curYear, curMonth, "short")}
          </Title>
          <ControllerButton onClick={handleClickNextButton}>
            <IoChevronForwardCircleOutline />
          </ControllerButton>
        </Header>

        <Table>
          <DayOfWeek />
          <tbody onClick={handleClickDate}>{renderCells()}</tbody>
        </Table>
      </Self>
    );
  }
};

export default Calendar;

const Self = styled.div`
  position: absolute;
  text-align: center;
  display: block;
  cursor: pointer;
  font-size: 13px;
`;

const Header = styled.span`
  display: flex;
  line-height: 38px;
  font-size: 1.6rem;
  position: relative;
  text-transform: uppercase;
  justify-content: center;
  margin-bottom: 3.1rem;
  width: 100%;
`;

const ControllerButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: 25px;
`;

const Title = styled.span`
  width: 11rem;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #262d39;
  display: flex;
  align-items: center;
  order: 0;
  flex-grow: 0;
  margin: 0px 2rem;
  justify-content: center;
  font-family: ${theme.fonts.pretend};
`;

const Table = styled.table`
  border-collapse: collapse;
  background-color: white;
  padding: 0.5rem;

  /* td {
    font-size: 14px;
    line-height: 20px;
  } */
`;
