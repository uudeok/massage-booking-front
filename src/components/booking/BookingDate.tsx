import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import { IPreviousButton } from "../../@types/book";
import { useState, useEffect } from "react";
import { DEVISE_SIZE } from "../../const/devise";
import BookingCalendar from "./BookingCalendar";
import { TIME_TABLE } from "../../const/massage";
import BookingAvailableTime from "./BookingAvailableTime";

const BookingDate = ({ changeTabHandler, tabNum }: IPreviousButton) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  console.log("@", selectedDate);

  useEffect(() => {
    // 예를들어 workingday/?from=선택한날짜&to=선택한날짜&products=선택한 마사지&category=마사지시간
    console.log("날짜가 바뀔때마다 api 호출");
  }, [selectedDate]);

  const changeDateHandler = (date: Date | null) => {
    setSelectedDate(date);
  };

  const fetchPayment = async (timeId: number) => {
    // BookingAvailableTime 컴포넌트에서 고객이 시간을 클릭하면 클릭한 시간대의 id 를 받아옴
    // 그래서 고른 날짜와 시간대를 확인
    await console.log(timeId, selectedDate);
    changeTabHandler(tabNum + 1);
  };

  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <PreviousButton
          changeTabHandler={changeTabHandler}
          tabNum={tabNum - 1}
        />
        <CalendarBoxStyle>
          <BookingCalendar
            changeDateHandler={changeDateHandler}
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
          />
        </CalendarBoxStyle>

        <AvailableBoxStyle>
          <AvailableCircleStyle></AvailableCircleStyle>
          <span> - 가능한 시간</span>
        </AvailableBoxStyle>
        <TimeListBoxStyle>
          {TIME_TABLE.map((item) => (
            <BookingAvailableTime
              key={item.id}
              data={item}
              fetchPayment={fetchPayment}
            />
          ))}
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
  font-family: "Pretendard-Regular";
`;

const InnerBoxStyle = styled.div`
  margin: auto;
  width: 50rem;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 100%;
  }
`;

const CalendarBoxStyle = styled.div`
  padding: 1.5rem;
  width: 50rem;
  margin: 2rem auto;
  display: flex;
  height: 6rem;
  align-items: center;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 100%;
  }
`;

const TimeListBoxStyle = styled.div`
  margin-top: 1rem;
  width: 700px;
  margin: 1rem auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid black;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 100%;
  }
`;

const AvailableBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 0.5rem;
`;

const AvailableCircleStyle = styled.div`
  width: 15px;
  height: 15px;
  background-color: #9ac488;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
