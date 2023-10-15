import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { IPreviousButton } from "../../@types/book";
import Calendar from "../common/calendar/Calendar";
import BookingAvailableTimeList from "./BookingAvailableTimeList";
import { useState } from "react";
import { DEVISE_SIZE } from "../../const/devise";

const BookingDate = ({ changeTabHandler, tabNum }: IPreviousButton) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const changeDateHandler = async (date: Date | null) => {
    setSelectedDate(date);

    // 날짜가 바뀔때마다 가능한 시간대 가져오는 api 요청
    // 예를들어 workingday/?from=선택한날짜&to=선택한날짜&products=선택한 마사지&category=마사지시간
  };

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <PreviousButton
          changeTabHandler={changeTabHandler}
          tabNum={tabNum - 1}
        />

        <CalendarBoxStyle>
          <ArrowBoxStyle>
            <span>«</span>
            <ArrowButtonStyle>이전 날짜</ArrowButtonStyle>
          </ArrowBoxStyle>

          <CalendarMiddleBoxStyle>
            <Calendar
              changeDateHandler={changeDateHandler}
              selectedDate={selectedDate}
            />
          </CalendarMiddleBoxStyle>

          <ArrowBoxStyle>
            <ArrowButtonStyle>다음 날짜</ArrowButtonStyle>
            <span>»</span>
          </ArrowBoxStyle>
        </CalendarBoxStyle>

        <TimeListBoxStyle>
          <BookingAvailableTimeList
            changeTabHandler={changeTabHandler}
            tabNum={tabNum}
          />
        </TimeListBoxStyle>
      </InnerBoxStyle>
    </ContainerStyle>
  );
};

export default BookingDate;

const ContainerStyle = styled.div`
  display: flex;
  width: 70%;
  margin: 2rem auto;
`;

const InnerBoxStyle = styled.div`
  margin: auto;
  width: 70%;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 100%;
  }
`;

const CalendarBoxStyle = styled.div`
  border: 1px solid black;
  padding: 1.5rem;
  width: 100%;
  margin: 2rem auto;
  display: flex;
  height: 5rem;
  align-items: center;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 100%;
  }
`;

const ArrowBoxStyle = styled.div`
  /* border: 2px solid #586d2c; */
  padding: 0.3rem;
  height: 2rem;
`;

const ArrowButtonStyle = styled.button`
  border: none;
  background-color: white;

  @media only screen and (max-width: ${DEVISE_SIZE.mobileWidthMax}) {
    display: none;
  }
`;

const CalendarMiddleBoxStyle = styled.div`
  flex: 1;
  text-align: center;
`;

const TimeListBoxStyle = styled.div`
  margin-top: 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
`;
