import React, { useState } from "react";
import styled from "styled-components";
import BookingItemList from "./BookingItemList";
import BookingDate from "./BookingDate";
import { DEVISE_SIZE } from "../../const/devise";
import BookingDetailList from "./BookingDetailList";
import BookingReservation from "./BookingReservation";

const BookingTab = () => {
  const [tabNum, setTabNum] = useState(0);

  const changeTabHandler = (number: number) => {
    setTabNum(number);
  };

  const TAB_LIST = [
    {
      key: "마사지 선택",
      content: (
        <BookingItemList changeTabHandler={changeTabHandler} tabNum={tabNum} />
      ),
    },
    {
      key: "시간 선택",
      content: (
        <BookingDetailList
          changeTabHandler={changeTabHandler}
          tabNum={tabNum}
        />
      ),
    },
    {
      key: "날짜 선택",
      content: (
        <BookingDate changeTabHandler={changeTabHandler} tabNum={tabNum} />
      ),
    },
    {
      key: "결제 하기",
      content: (
        <BookingReservation
          changeTabHandler={changeTabHandler}
          tabNum={tabNum}
        />
      ),
    },
  ];

  return (
    <>
      <TabListStyle>
        {TAB_LIST.map((item, index) => (
          <React.Fragment key={index}>
            <TabButtonStyle
              disabled={index !== tabNum}
              $isActive={index === tabNum}
              onClick={() => {
                setTabNum(index);
              }}
            >
              {item.key}
            </TabButtonStyle>
            <ArrowBoxStyle $isActive={index === tabNum}></ArrowBoxStyle>
          </React.Fragment>
        ))}
      </TabListStyle>

      <ContentContainerStyle>{TAB_LIST[tabNum].content}</ContentContainerStyle>
    </>
  );
};

export default BookingTab;

const TabListStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 5rem;
  margin-top: 5rem;
`;

const TabButtonStyle = styled.button<{ $isActive: boolean }>`
  width: 95%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 1.5rem;
  font-family: "Pretendard-Regular";

  background-color: ${({ $isActive }) =>
    $isActive ? "#819977" : "whitesmoke"};
  color: ${({ $isActive }) => ($isActive ? "white" : "grey")};

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: ${DEVISE_SIZE.mobileWidthMax}) {
    font-size: 1rem;
    width: 100%;
  }
`;

const ArrowBoxStyle = styled.div<{ $isActive: boolean }>`
  width: 5%;
  border-top: ${({ $isActive }) =>
    $isActive ? "40px solid whitesmoke" : "40px solid whitesmoke"};
  border-bottom: ${({ $isActive }) =>
    $isActive ? "40px solid whitesmoke" : "40px solid whitesmoke"};
  border-left: ${({ $isActive }) =>
    $isActive ? "40px solid #819977" : "40px solid whitesmoke"};

  @media only screen and (max-width: ${DEVISE_SIZE.mobileWidthMax}) {
    display: none;
  }
`;

const ContentContainerStyle = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3rem;
`;
