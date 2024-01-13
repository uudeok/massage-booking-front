import styled from "styled-components";
import BookingNotice from "./BookingNotice";
import BookingSummary from "./BookingSummary";
import { useMemo } from "react";
import SectionTitle from "../common/shared/SectionTitle";
import theme from "../../styles/theme";

type TProps = {
  selectedDate: string;
  selectedTime: string;
};

const BookingBreakDown = ({ selectedDate, selectedTime }: TProps) => {
  const bookingNotice = useMemo(() => <BookingNotice />, []);

  return (
    <ReservationDetailStyle>
      <SectionTitle>※ 예약 내역</SectionTitle>
      <DetailBoxStyle>
        {bookingNotice}
        <BookingSummary
          selectedDate={selectedDate}
          selectedTime={selectedTime}
        />
      </DetailBoxStyle>
    </ReservationDetailStyle>
  );
};

export default BookingBreakDown;

const ReservationDetailStyle = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const DetailBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1rem;
  gap: 0.5rem;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    flex-direction: column;
  }
`;
