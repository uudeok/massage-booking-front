import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import BookingNotice from "./BookingNotice";
import BookingSummary from "./BookingSummary";
import { useMemo } from "react";
import Title from "./Title";

type TProps = {
  selectedDate: Date;
  massageEndTime: Date | null;
};

const BookingBreakDown = ({ selectedDate, massageEndTime }: TProps) => {
  const bookingNotice = useMemo(() => <BookingNotice />, []);

  return (
    <ReservationDetailStyle>
      <Title>※ 예약 내역</Title>
      <DetailBoxStyle>
        {bookingNotice}
        <BookingSummary
          selectedDate={selectedDate}
          massageEndTime={massageEndTime}
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

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    flex-direction: column;
  }
`;
