import styled from "styled-components";
import PreviousButton from "../common/button/PreviousButton";
import BookingSummary from "./BookingSummary";
import BookingConfirm from "./BookingConfirm";

const BookingForm = () => {
  return (
    <ContainerStyle>
      <PreviousButton />
      <BookingSummary />
      <BookingConfirm />
    </ContainerStyle>
  );
};

export default BookingForm;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: auto;
  font-family: "Pretendard-Regular";
  font-size: 1.2rem;
`;
