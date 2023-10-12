import { useState } from "react";
import styled from "styled-components";
import BookingItemList from "./BookingItemList";
import BookingDetail from "./BookingDetail";
import BookingDate from "./BookingDate";

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
    <div>
      <BookingTabListStyle>
        {TAB_LIST.map((item, index) => (
          <BookingTabItemStyle
            $isActive={index === tabNum}
            key={item.key}
            onClick={() => {
              setTabNum(index);
            }}
          >
            <button disabled={index !== tabNum}>{item.key}</button>
          </BookingTabItemStyle>
        ))}
      </BookingTabListStyle>

      <BookingContentContainerStyle>
        {TAB_LIST[tabNum].content}
      </BookingContentContainerStyle>
    </div>
  );
};

export default BookingTab;

const BookingTabListStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const BookingTabItemStyle = styled.li<{ $isActive: boolean }>`
  width: 33.3%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    cursor: pointer;
    background-color: ${({ $isActive }) =>
      $isActive ? "#2CC185" : "whitesmoke"};
    color: ${({ $isActive }) => ($isActive ? "white" : "grey")};
    border: none;
    font-size: 20px;
    font-family: "KBO-Dia-Gothic_medium";
  }

  background-color: ${({ $isActive }) =>
    $isActive ? "#2CC185" : "whitesmoke"};
  z-index: ${({ $isActive }) => ($isActive ? "1" : "")};
`;

const BookingContentContainerStyle = styled.div``;
