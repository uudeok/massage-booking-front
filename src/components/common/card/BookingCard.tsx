import styled from "styled-components";

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
`;
