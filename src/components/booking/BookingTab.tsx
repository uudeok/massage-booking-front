import { useState } from "react";
import styled from "styled-components";
import BookingItemList from "./BookingItemList";
import BookingDetail from "./BookingDetail";

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
    { key: "날짜 선택", content: "날짜 및 시간 선택" },
    { key: "결제하기", content: "최종 내용정리 및 결제" },
  ];

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
      <BookingContentContainerStyle>
        {TAB_LIST[tabNum].content}
      </BookingContentContainerStyle>
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
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;

  background-color: ${({ $isActive }) =>
    $isActive ? "#819977" : "whitesmoke"};
  color: ${({ $isActive }) => ($isActive ? "white" : "black")};
  z-index: ${({ $isActive }) => ($isActive ? "1" : "")};
`;

const BookingContentContainerStyle = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 3rem;
`;
