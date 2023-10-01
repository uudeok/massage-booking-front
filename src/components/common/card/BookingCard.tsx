import styled from "styled-components";

const BookingCardStyle = styled.div`
  background-color: white;
  border-radius: 13px;
  border: 1px solid black;
  min-height: 35vh;
`;

const BookingCard = ({ children }: { children: React.ReactNode }) => {
  return <BookingCardStyle>{children}</BookingCardStyle>;
};

export default BookingCard;
