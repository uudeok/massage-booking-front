import { css } from "styled-components";
import { MONTH_NAME_VALUES } from "../../@types/calendar";
import { MONTH_NAME } from "../../const/calendar";
import styled from "styled-components";

interface IDateCell {
  $isToday?: boolean;
  disabled: boolean;
  monthName: MONTH_NAME_VALUES;
  dateLabel: string;
  curMonthOnly?: boolean;
  selected: boolean;
  onMouseOver: () => void;
}

const getDateCellColor = (month: MONTH_NAME_VALUES) => {
  switch (month) {
    case "prev":
      return css`
        color: #b2aebd;
      `;
    case "current":
      return css`
        color: black;
      `;
    case "next":
      return css`
        color: #b2aebd;
      `;
    default:
      return "";
  }
};

const DateCell = ({
  $isToday,
  dateLabel,
  disabled,
  monthName,
  curMonthOnly,
  selected,
  onMouseOver,
}: IDateCell) => {
  return (
    <Self
      disabled={disabled}
      $month={monthName}
      $isToday={$isToday}
      $isCurMonth={monthName === MONTH_NAME.CURRENT}
      selected={selected}
      onMouseOver={onMouseOver}
    >
      {curMonthOnly && monthName !== MONTH_NAME.CURRENT ? null : (
        <button disabled={disabled} data-name={monthName}>
          {dateLabel}
        </button>
      )}

      {$isToday && monthName === MONTH_NAME.CURRENT && (
        <TodayLabel>오늘</TodayLabel>
      )}
    </Self>
  );
};

export default DateCell;

const Self = styled.td<{
  disabled: boolean;
  $month: MONTH_NAME_VALUES;
  selected?: boolean;
  $isToday?: boolean;
  $isCurMonth?: boolean;
}>`
  position: relative;
  padding-bottom: 1rem;
  /* border: 1px solid red; */

  ${({ disabled }) =>
    disabled &&
    css`
      color: rgba(38, 45, 57, 0.16);
      pointer-events: none;
    `}

  button {
    width: 2.5rem;
    height: 2.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    ${({ $month }) => getDateCellColor($month)}

    &:disabled {
      cursor: default;
      color: rgba(38, 45, 57, 0.16);
    }

    ${({ $isToday }) =>
      $isToday &&
      css`
        border: 1px solid rgba(38, 45, 57, 0.16);
        box-sizing: border-box;
        border-radius: 30px;
      `}
  }

  ${({ disabled, $isCurMonth }) =>
    !disabled &&
    $isCurMonth &&
    css`
      cursor: pointer;

      &:hover {
        button {
          color: white;
          background-color: #3581ff;
          border-radius: 50%;
          border: none;
        }
      }
    `}

  ${({ selected }) =>
    selected &&
    css`
      color: white;
      cursor: pointer;

      button {
        color: white !important;
        background-color: #3581ff;
        border-radius: 50%;
      }
    `}
`;

const TodayLabel = styled.div`
  position: absolute;
  width: 100%;
  height: 1.6rem;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  color: rgba(38, 45, 57, 0.52);
  left: -0.1px;
`;
