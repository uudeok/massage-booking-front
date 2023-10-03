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
  const [isActive] = useState(true);

  console.log(isActive);

  return (
    <>
      <BookingTabContainerStyle>
        {TAB_LIST.map((item, index) => (
          <BookingTabItemStyle
            isActive={index === tabNum && isActive}
            key={item.key}
            onClick={() => {
              setTabNum(index);
            }}
          >
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
  display: flex;
  margin: 0 auto;
  overflow: hidden;
`;

const BookingTabItemStyle = styled.li<{ isActive: boolean }>`
  width: 33%;
  margin: 0 auto;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  cursor: pointer;

  background-color: ${({ isActive }) => (isActive ? "white" : "aliceblue")};
`;
