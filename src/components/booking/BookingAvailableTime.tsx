import styled from "styled-components";
import { IBookingAvailableTime } from "../../@types/book";
import { MEDIA_QUERY } from "../../const/devise";

const BookingAvailableTime = ({
  data,
  fetchReservation,
}: IBookingAvailableTime) => {
  return (
    <ButtonStyle
      onClick={() => fetchReservation(data.id)}
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
  height: 4rem;
  font-size: 1rem;
  font-family: "Pretendard-Regular";
  cursor: pointer;
  background-color: white;

  color: ${({ $isBooked }) => ($isBooked ? "lightgrey" : "white")};
  background-color: ${({ $isBooked }) =>
    $isBooked ? "whitesmoke" : "#76916a"};

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 70px;
    margin: 20px 7px;
  }
`;
