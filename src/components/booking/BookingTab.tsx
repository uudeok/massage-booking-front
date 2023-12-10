import React, { useEffect, Fragment } from "react";
import styled from "styled-components";
import BookingMassageList from "./BookingMassageList";
import { MEDIA_QUERY } from "../../const/devise";
import BookingDetailList from "./BookingDetailList";
import { useSelector, useDispatch } from "react-redux";
import { currTabNum, resetTabNum } from "../../stores/tabSlice";
import BookingDate from "./BookingDate";
import { font } from "../../fonts/font";

const TAB_LIST = [
  {
    key: "마사지 선택",
    content: <BookingMassageList />,
  },
  {
    key: "종류 선택",
    content: <BookingDetailList />,
  },
  {
    key: "날짜 선택",
    content: <BookingDate />,
  },
];

const BookingTab = () => {
  const dispatch = useDispatch();
  const tabNum = useSelector(currTabNum);

  useEffect(() => {
    return () => {
      dispatch(resetTabNum());
    };
  }, [dispatch]);

  return (
    <>
      <TabListStyle>
        {TAB_LIST.map((item, index) => (
          <Fragment key={index}>
            <TabButtonStyle
              disabled={index !== tabNum}
              $isActive={index === tabNum}
            >
              {item.key}
            </TabButtonStyle>
          </Fragment>
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
`;

const TabButtonStyle = styled.button<{ $isActive: boolean }>`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 1.5rem;
  font-family: ${font.Gmarket};

  background-color: ${({ $isActive }) =>
    $isActive ? "#819977" : "whitesmoke"};
  color: ${({ $isActive }) => ($isActive ? "white" : "grey")};
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "")};
  box-shadow: ${({ $isActive }) =>
    $isActive ? "0 0 0.3rem 0 rgba(0, 0, 0, 0.2)" : ""};

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 0.8rem;
    width: 100%;
  }
`;

const ContentContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 3rem;
`;
