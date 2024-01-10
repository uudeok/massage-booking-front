import styled from "styled-components";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import React from "react";
import theme from "../../styles/theme";

type TProps = {
  curMonth: number;
  curYear: number;
  setCurMonth: React.Dispatch<React.SetStateAction<number>>;
  setCurYear: React.Dispatch<React.SetStateAction<number>>;
};

const CalendarHeader = ({
  curMonth,
  curYear,
  setCurMonth,
  setCurYear,
}: TProps) => {
  const getMonthLabel = (option: "short" | "long"): string => {
    return new Date(curYear, curMonth).toLocaleString("kr", { month: option });
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

  return (
    <Header>
      <ControllerButton onClick={handleClickPrevButton}>
        <IoChevronBackCircleOutline />
      </ControllerButton>
      <Title>
        {curYear}년 {getMonthLabel("short")}
      </Title>
      <ControllerButton onClick={handleClickNextButton}>
        <IoChevronForwardCircleOutline />
      </ControllerButton>
    </Header>
  );
};

export default CalendarHeader;

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
