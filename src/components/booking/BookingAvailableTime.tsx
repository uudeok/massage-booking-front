import styled from "styled-components";
import { IBookingAvailableTime } from "../../@types/book";
import { DEVISE_SIZE } from "../../const/devise";

const BookingAvailableTime = ({
  data,
  fetchPayment,
}: IBookingAvailableTime) => {
  return (
    <ButtonStyle
      onClick={() => fetchPayment(data.id)}
      disabled={data.type === "book"}
      $isBooked={data.type === "book"}
    >
      {data.startTime.slice(0, 5)} - {data.endTime.slice(0, 5)}
    </ButtonStyle>
  );
};

export default BookingAvailableTime;

const ButtonStyle = styled.button<{ $isBooked: boolean }>`
  width: 100px;
  margin: 20px 8px;
  border: none;
  text-align: center;
  padding: 0.5rem;

  cursor: pointer;
  background-color: white;
  font-size: 15px;

  color: ${({ $isBooked }) => ($isBooked ? "lightgrey" : "white")};
  background-color: ${({ $isBooked }) =>
    $isBooked ? "whitesmoke" : "#83927e"};

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMin}) {
    font-size: 14px;
    width: 90px;
    margin: 20px 7px;
  }
`;
