import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { IPreviousButton } from "../../@types/book";
import Calendar from "../common/calendar/Calendar";
import BookingAvailableTimeList from "./BookingAvailableTimeList";
import { useState } from "react";

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
          <PreviousBoxStyle>
            <SideButtonStyle>« 이전 날짜</SideButtonStyle>
          </PreviousBoxStyle>
          <CalendarMiddleBoxStyle>
            <Calendar
              changeDateHandler={changeDateHandler}
              selectedDate={selectedDate}
            />
          </CalendarMiddleBoxStyle>
          <NextBoxStyle>
            <SideButtonStyle>다음 날짜 »</SideButtonStyle>
          </NextBoxStyle>
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
  /* border: 1px solid black; */
  width: 70%;
  margin: auto;
`;

const InnerBoxStyle = styled.div`
  margin: auto;
  padding: 1rem;

  /* border: 1px solid blue; */
`;

const CalendarBoxStyle = styled.div`
  /* border: 1px solid black; */
  padding: 1.5rem;
  width: 55rem;
  margin: 2rem auto;
  display: flex;
  height: 5rem;
  align-items: center;
`;

const CalendarMiddleBoxStyle = styled.div`
  flex: 1;
  text-align: center;
`;

const TimeListBoxStyle = styled.div`
  margin-top: 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
`;

const SideButtonStyle = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  font-size: 14px;
`;

const PreviousBoxStyle = styled.div`
  border: 2px solid #586d2c;
  padding: 0.3rem;
  height: 2rem;
`;

const NextBoxStyle = styled.div`
  border: 2px solid #586d2c;
  padding: 0.3rem;
  height: 2rem;
`;
