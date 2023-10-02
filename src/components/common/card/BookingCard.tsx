import styled from "styled-components";

const BookingCardStyle = styled.div`
  width: 100%;
  min-height: 40vh;
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
`;

const BookingCard = ({ children }: { children: React.ReactNode }) => {
  return <BookingCardStyle>{children}</BookingCardStyle>;
};

export default BookingCard;
