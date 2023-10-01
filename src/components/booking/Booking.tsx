import styled from "styled-components";

const BookingContainerStyle = styled.div`
  width: 100%;
  min-height: 50vh;
  background-color: aliceblue;
`;

const Booking = () => {
  return (
    <BookingContainerStyle>
      <div>booking 구역</div>
    </BookingContainerStyle>
  );
};

export default Booking;
