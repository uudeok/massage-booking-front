import { useState } from "react";
import BookingForm from "./BookingForm";
import BookingCard from "../common/card/BookingCard";
import styled from "styled-components";
import { DEVISE_SIZE } from "../../const/devise";

const TAB_LIST = [
  { key: "마사지 선택", content: <BookingForm /> },
  { key: "날짜 및 시간 선택", content: "내용2" },
  { key: "예약하기", content: "내용3" },
];

const BookingTab = () => {
  const [tabNum, setTabNum] = useState(0);

  return (
    <>
      <BookingTabContainerStyle>
        {TAB_LIST.map((item, index) => (
          <BookingTabItemStyle
            $isActive={index === tabNum}
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
`;

const BookingTabItemStyle = styled.li<{ $isActive: boolean }>`
  width: 33.3%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  cursor: pointer;
  margin-top: 3rem;

  background-color: ${({ $isActive }) =>
    $isActive ? "whitesmoke" : "#93c47d"};
  color: ${({ $isActive }) => ($isActive ? "black" : "white")};
  text-decoration: ${({ $isActive }) => ($isActive ? "underline" : "none")};
  z-index: ${({ $isActive }) => ($isActive ? "1" : "")};

  /* @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    margin-top: 3rem;
  } */
`;
