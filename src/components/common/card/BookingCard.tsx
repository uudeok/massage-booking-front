import styled from "styled-components";

const BookingCard = ({ children }: { children: React.ReactNode }) => {
  return <BookingCardStyle>{children}</BookingCardStyle>;
};

export default BookingCard;

const BookingCardStyle = styled.div`
  width: 100%;
  min-height: 40vh;
  display: flex;
  padding: 1rem;
  border-radius: 12px;
  background-color: whitesmoke;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
`;
