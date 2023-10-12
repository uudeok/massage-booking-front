import { useState } from "react";
import styled from "styled-components";
import BookingItemList from "./BookingItemList";
import BookingDate from "./BookingDate";
import { DEVISE_SIZE } from "../../const/devise";
import BookingDetailList from "./BookingDetailList";

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
      content: <BookingDetailList changeTabHandler={changeTabHandler} />,
    },
    {
      key: "날짜 선택",
      content: <BookingDate changeTabHandler={changeTabHandler} />,
    },
    { key: "결제하기", content: "최종 내용정리 및 결제" },
  ];

  return (
    <>
      <TabListStyle>
        {TAB_LIST.map((item, index) => (
          <TabButtonStyle
            disabled={index !== tabNum}
            key={item.key}
            $isActive={index === tabNum}
            onClick={() => {
              setTabNum(index);
            }}
          >
            <li>{item.key}</li>
          </TabButtonStyle>
        ))}
      </TabListStyle>

      <ContentContainerStyle>{TAB_LIST[tabNum].content}</ContentContainerStyle>
    </>
  );
};

export default BookingTab;

const TabListStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 5rem;
  margin-top: 5rem;
`;

const TabButtonStyle = styled.button<{ $isActive: boolean }>`
  width: 30%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 20px;
  font-family: "Pretendard-Regular";

  background-color: ${({ $isActive }) =>
    $isActive ? "#97a393" : "whitesmoke"};
  color: ${({ $isActive }) => ($isActive ? "white" : "grey")};
`;

const ContentContainerStyle = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3rem;

  /* @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    margin: auto;
  } */
`;
