import styled from "styled-components";
import { TTimeTable } from "../../@types/book";
import { MEDIA_QUERY } from "../../const/devise";

type TProps = {
  data: TTimeTable;
  fetchReservation: (timeId: number) => void;
};

const BookingAvailableTime = ({ data, fetchReservation }: TProps) => {
  return (
    <ButtonStyle
      onClick={() => fetchReservation(data.id)}
      disabled={data.type === "BOOK"}
      $isBooked={data.type === "BOOK"}
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
  font-family: "GmarketSansMedium";
  cursor: pointer;
  background-color: white;

  color: ${({ $isBooked }) => ($isBooked ? "lightgrey" : "white")};
  background-color: ${({ $isBooked }) =>
    $isBooked ? "whitesmoke" : "#a2c294"};

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 70px;
    margin: 15px 7px;
  }
`;
