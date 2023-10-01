import Calendar from "../common/calendar/Calendar";
import { useState } from "react";
import styled from "styled-components";
import { TIME_TABLE } from "../../const/booking";

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const changeDateHandler = (date: Date) => {
    setSelectedDate(date);
  };

  const submitBookingHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const timeSelect = TIME_TABLE.map((item) => (
    <li key={item.time}>
      <button>{item.time}</button>
    </li>
  ));

  return (
    <FormContainerStyle onSubmit={submitBookingHandler}>
      <FormSelectItemStyle>
        <label htmlFor="date">1. 날짜 선택</label>
        <Calendar
          changeDateHandler={changeDateHandler}
          selectedDate={selectedDate}
        />
      </FormSelectItemStyle>
      <FormSelectItemStyle>
        <label htmlFor="time">2. 시간선택</label>
        <FormItemListStyle>{timeSelect}</FormItemListStyle>
      </FormSelectItemStyle>
      <FormSelectItemStyle>
        <label>3. 마사지선택</label>
      </FormSelectItemStyle>
    </FormContainerStyle>
  );
};

export default BookingForm;

const FormContainerStyle = styled.form`
  border: 1px solid black;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

const FormSelectItemStyle = styled.div`
  border: 1px solid black;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  width: 20rem;
`;

const FormItemListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
