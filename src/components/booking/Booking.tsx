import styled from "styled-components";
import BookingTab from "./BookingTab";

const Booking = () => {
  return (
    <BookingContainerStyle>
      <BookingTab />
    </BookingContainerStyle>
  );
};

export default Booking;

const BookingContainerStyle = styled.div`
  width: 100%;
  min-height: 60vh;
  /* background-color: aliceblue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
