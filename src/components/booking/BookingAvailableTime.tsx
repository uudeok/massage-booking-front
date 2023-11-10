import styled from "styled-components";
import { TTimeTable } from "../../@types/massage";
import { MEDIA_QUERY } from "../../const/devise";
import { TSelectedItem } from "./BookingDate";

type TProps = {
  data: TTimeTable[];
  fetchReservation: (selectedItem: TSelectedItem) => Promise<void>;
  count: number;
};

const BookingAvailableTime = ({ data, fetchReservation, count }: TProps) => {
  const lastIndex = count - 1;

  let num = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === "BOOK") {
      num = i;
    }
  }

  const checkSelectedItemHandler = (
    startId: number,
    startTime: string,
    endId: number,
    endTime: string,
    date: string
  ) => {
    const selectedItem = {
      startId: startId,
      startTime: startTime,
      endId: endId,
      endTime: endTime,
      date: date,
    };
    fetchReservation(selectedItem);
  };

  return (
    <ButtonStyle
      onClick={() =>
        checkSelectedItemHandler(
          data[0].id,
          data[0].startTime,
          data[lastIndex].id,
          data[lastIndex].startTime,
          data[0].date
        )
      }
      disabled={data[num].type === "BOOK"}
      $isBooked={data[num].type === "BOOK"}
    >
      {data[0].startTime} - {data[lastIndex].startTime}
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
  font-size: 1rem;

  color: ${({ $isBooked }) => ($isBooked ? "lightgrey" : "white")};
  background-color: ${({ $isBooked }) =>
    $isBooked ? "whitesmoke" : "#a2c294"};

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 70px;
    margin: 15px 7px;
    font-size: 0.8rem;
  }
`;
