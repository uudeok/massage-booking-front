import { Fragment, useEffect } from "react";
import styled from "styled-components";
import BookingList from "./BookingList";
import BookingDate from "./BookingDate";
import { MEDIA_QUERY } from "../../const/devise";
import BookingDetailList from "./BookingDetailList";
import BookingForm from "./BookingForm";
import { useSelector, useDispatch } from "react-redux";
import { currTabNum, resetTabNum } from "../../stores/tabSlice";

const BookingTab = () => {
  const dispatch = useDispatch();
  const tabNum = useSelector(currTabNum);

  useEffect(() => {
    return () => {
      dispatch(resetTabNum());
    };
  }, [dispatch]);

  const TAB_LIST = [
    {
      key: "마사지 선택",
      content: <BookingList />,
    },
    {
      key: "시간 선택",
      content: <BookingDetailList />,
    },
    {
      key: "날짜 선택",
      content: <BookingDate />,
    },
    {
      key: "예약하기",
      content: <BookingForm />,
    },
  ];

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
  margin-top: 1.5rem;
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
  font-family: "GmarketSansMedium";

  background-color: ${({ $isActive }) =>
    $isActive ? "#afc9a4" : "whitesmoke"};
  color: ${({ $isActive }) => ($isActive ? "white" : "grey")};

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
