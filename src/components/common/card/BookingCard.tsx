import styled from "styled-components";
import { DEVISE_SIZE } from "../../../const/devise";

const BookingCard = ({ children }: { children: React.ReactNode }) => {
  return <BookingCardStyle>{children}</BookingCardStyle>;
};

export default BookingCard;

const BookingCardStyle = styled.div`
  margin: 2rem auto;
  border-radius: 6px;
  background-color: whitesmoke;
  padding: 1rem;
  width: 45rem;
  height: 12rem;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    height: 20rem;
    width: 30rem;
    margin: 2rem auto;
  }
`;
