import styled from "styled-components";
import { DEVISE_SIZE } from "../../const/devise";
import BookingItemList from "./BookingItemList";

const BookingForm = () => {
  return (
    <BookingFormContainerStyle>
      <BookingFormSectionStyle>
        <BookingItemList />
      </BookingFormSectionStyle>
    </BookingFormContainerStyle>
  );
};

export default BookingForm;

const BookingFormContainerStyle = styled.div`
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
  width: 100%;
  padding: 0.5rem;

  /* border: 1px solid black; */

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMin}) {
    height: 100%;
  }
`;
