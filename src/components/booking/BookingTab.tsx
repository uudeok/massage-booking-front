import { useState } from "react";
import BookingForm from "./BookingForm";
import BookingCard from "../common/card/BookingCard";
import styled from "styled-components";

const TAB_LIST = [
  { key: "마사지 예약", content: <BookingForm /> },
  { key: "예약 조회", content: "내용2" },
  { key: "예약 변경", content: "내용3" },
];

const BookingTab = () => {
  const [tabNum, setTabNum] = useState(0);

  return (
    <>
      <BookingTabContainerStyle>
        {TAB_LIST.map((item, index) => (
          <BookingTabItemStyle key={item.key} onClick={() => setTabNum(index)}>
            {item.key}
          </BookingTabItemStyle>
        ))}
      </BookingTabContainerStyle>
      <BookingCard>{TAB_LIST[tabNum].content}</BookingCard>
    </>
  );
};

export default BookingTab;

const BookingTabContainerStyle = styled.ul`
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  margin: 0 auto;
`;

const BookingTabItemStyle = styled.li`
  width: 33%;
  border: 1px solid black;
  margin: 0 auto;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom: none;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
