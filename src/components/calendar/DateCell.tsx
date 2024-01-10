import { css } from "styled-components";
import { MONTH_NAME_VALUES } from "../../@types/calendar";
import { MONTH_NAME } from "../../const/calendar";
import styled from "styled-components";
import React from "react";

interface IDateCell {
  isToday?: boolean;
  disabled: boolean;
  monthName: MONTH_NAME_VALUES;
  dateLabel: string;
  selected: boolean;
  curMonthOnly?: boolean;
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

const DateCell: React.FC<IDateCell> = ({
  isToday,
  disabled,
  monthName,
  dateLabel,
  selected,
}) => {
  return (
    <Self
      disabled={disabled}
      month={monthName}
      selected={selected}
      isToday={isToday}
      isCurMonth={monthName === MONTH_NAME.CURRENT}
    >
      {monthName !== MONTH_NAME.CURRENT ? null : (
        <button disabled={disabled} data-name={monthName}>
          {dateLabel}
        </button>
      )}

      {isToday && monthName === MONTH_NAME.CURRENT && <div>오늘</div>}
    </Self>
  );
};

export default React.memo(DateCell);

const Self = styled.td<{
  disabled: boolean;
  month: MONTH_NAME_VALUES;
  selected: boolean;
  isToday?: boolean;
  isCurMonth?: boolean;
}>`
  position: relative;
  padding-bottom: 1.6rem;

  ${({ disabled }) =>
    !disabled &&
    css`
      cursor: pointer;

      &:hover {
        button {
          color: white;
          background-color: #3581ff;
          border: none;
        }
      }
    `}

  button {
    width: 3.6rem;
    height: 3.6rem;
    ${({ month }) => getDateCellColor(month)}

    &:disabled {
      cursor: default;
      color: rgba(38, 45, 57, 0.16);
    }

    ${({ isToday }) =>
      isToday &&
      css`
        border: 1px solid rgba(38, 45, 57, 0.16);
        box-sizing: border-box;
        border-radius: 20px;
      `}
  }
`;
