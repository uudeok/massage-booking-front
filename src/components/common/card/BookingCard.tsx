import styled from "styled-components";
import { DEVISE_SIZE } from "../../../const/devise";

const BookingCard = ({ children }: { children: React.ReactNode }) => {
  return <BookingCardStyle>{children}</BookingCardStyle>;
};

export default BookingCard;

const BookingCardStyle = styled.div`
  width: 100%;
  min-height: 30vh;
  max-height: 30vh;
  display: flex;
  padding: 1rem;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: whitesmoke;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 3rem;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    min-height: 55vh;
    max-height: 55vh;
  }
`;
