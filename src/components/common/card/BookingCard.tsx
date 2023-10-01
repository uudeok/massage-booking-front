import styled from "styled-components";

const BookingCardStyle = styled.div`
  min-height: 30vh;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
`;

const BookingCard = ({ children }: { children: React.ReactNode }) => {
  return <BookingCardStyle>{children}</BookingCardStyle>;
};

export default BookingCard;
