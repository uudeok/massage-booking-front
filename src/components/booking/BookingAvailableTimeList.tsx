import { IPreviousButton } from "../../@types/book";
import { TIME_TABLE } from "../../const/book";
import BookingAvailableTime from "./BookingAvailableTime";
import styled from "styled-components";
import { DEVISE_SIZE } from "../../const/devise";

const BookingAvailableTimeList = ({
  changeTabHandler,
  tabNum,
}: IPreviousButton) => {
  /// 선택한 날짜의 시간대를 받아와서 뿌려줌.

  return (
    <WrapperStyle>
      {TIME_TABLE.map((item, index) => (
        <TimeItemStyle key={index}>
          <BookingAvailableTime
            data={item}
            changeTabHandler={changeTabHandler}
            tabNum={tabNum}
          />
        </TimeItemStyle>
      ))}
    </WrapperStyle>
  );
};

export default BookingAvailableTimeList;

const WrapperStyle = styled.ul`
  width: 700px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 100%;
  }
`;

const TimeItemStyle = styled.li`
  width: 110px;
  margin: 20px 3px;
  border: 1px solid black;
  text-align: center;
  padding: 0.5rem;

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMin}) {
    width: 70px;
    margin: 20px 7px;
  }
`;
