import { useState } from "react";
import styled from "styled-components";
import BookingItemList from "./BookingItemList";
import BookingDetail from "./BookingDetail";
import BookingDate from "./BookingDate";
import { DEVISE_SIZE } from "../../const/devise";

const BookingTab = () => {
  const [tabNum, setTabNum] = useState(0);

  const changeTabHandler = (number: number) => {
    setTabNum(number);
  };

  const TAB_LIST = [
    {
      key: "마사지 선택",
      content: <BookingItemList changeTabHandler={changeTabHandler} />,
    },
    {
      key: "시간 선택",
      content: <BookingDetail changeTabHandler={changeTabHandler} />,
    },
    {
      key: "날짜 선택",
      content: <BookingDate />,
    },
    { key: "결제하기", content: "최종 내용정리 및 결제" },
  ];

  return (
    <>
      <BookingTabListStyle>
        {TAB_LIST.map((item, index) => (
          <BookingTabButtonStyle
            disabled={index !== tabNum}
            key={item.key}
            $isActive={index === tabNum}
            onClick={() => {
              setTabNum(index);
            }}
          >
            <li>{item.key}</li>
          </BookingTabButtonStyle>
        ))}
      </BookingTabListStyle>

      <BookingContentContainerStyle>
        {TAB_LIST[tabNum].content}
      </BookingContentContainerStyle>
    </>
  );
};

export default BookingTab;

const BookingTabListStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 5rem;
`;

const BookingTabButtonStyle = styled.button<{ $isActive: boolean }>`
  width: 30%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isActive }) =>
    $isActive ? "#2CC185" : "whitesmoke"};
  color: ${({ $isActive }) => ($isActive ? "white" : "grey")};
  border: none;
  font-size: 20px;
`;

const BookingContentContainerStyle = styled.div`
  display: flex;
  width: 100%;

  /* @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    margin: auto;
  } */
`;
