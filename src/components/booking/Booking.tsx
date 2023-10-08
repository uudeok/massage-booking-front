import styled from "styled-components";
import BookingTab from "./BookingTab";
import { DEVISE_SIZE } from "../../const/devise";

const Booking = () => {
  return (
    <BookingContainerStyle>
      <BookingTab />
    </BookingContainerStyle>
  );
};

export default Booking;

const BookingContainerStyle = styled.div`
  width: 70%;
  min-height: 50vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("b.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.7; */

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 80%;
    /* min-height: 55vh; */
  }
`;
