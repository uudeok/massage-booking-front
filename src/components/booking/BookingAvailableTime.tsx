import styled from "styled-components";
import { IBookingAvailableTime } from "../../@types/book";

const BookingAvailableTime = ({
  data,
  changeTabHandler,
  tabNum,
}: IBookingAvailableTime) => {
  const fetchPayment = (timeId: number) => {
    /// 마사지 받을 날짜와 시간을 선택하면, 최종 페이지로 넘어간다.
    console.log(timeId);
    changeTabHandler(tabNum + 1);
  };

  return (
    <>
      <ButtonStyle
        onClick={() => fetchPayment(data.id)}
        disabled={data.type === "book"}
      >
        {data.startTime.slice(0, 5)} - {data.endTime.slice(0, 5)}
      </ButtonStyle>
    </>
  );
};

export default BookingAvailableTime;

const ButtonStyle = styled.button`
  cursor: pointer;
  background-color: white;
  font-size: 15px;
  border: none;
`;
