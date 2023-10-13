import { IPreviousButton } from "../../@types/book";
import { TIME_TABLE } from "../../const/book";
import BookingAvailableTime from "./BookingAvailableTime";
import styled from "styled-components";

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
  /* border: 1px solid royalblue; */
  width: 700px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TimeItemStyle = styled.li`
  width: 110px;
  margin: 20px 3px;
  border: 1px solid black;
  text-align: center;
  padding: 0.5rem;
`;
