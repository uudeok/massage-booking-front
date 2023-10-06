import styled from "styled-components";
import { DEVISE_SIZE } from "../../const/devise";
import BookingList from "./BookingList";

const BookingForm = () => {
  return (
    <BookingFormContainerStyle>
      <BookingFormSectionStyle>
        <h2>1. 마사지 선택</h2>
        <BookingList />
      </BookingFormSectionStyle>

      <BookingFormSectionStyle>2</BookingFormSectionStyle>
      <BookingFormSectionStyle>3</BookingFormSectionStyle>
    </BookingFormContainerStyle>
  );
};

export default BookingForm;

const BookingFormContainerStyle = styled.div`
  /* border: 1px solid black; */
  padding: 1rem;
  width: 100%;
  display: flex;

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMin}) {
    flex-direction: column;
    overflow-y: scroll;
  }
`;

const BookingFormSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  padding: 1rem;
  text-align: center;

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMin}) {
    width: 100%;
  }
`;
