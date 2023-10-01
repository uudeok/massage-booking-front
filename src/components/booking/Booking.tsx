import styled from "styled-components";
import BookingList from "./BookingList";

const BookingContainerStyle = styled.div`
  width: 100%;
  min-height: 60vh;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Booking = () => {
  return (
    <BookingContainerStyle>
      <BookingList />
    </BookingContainerStyle>
  );
};

export default Booking;
