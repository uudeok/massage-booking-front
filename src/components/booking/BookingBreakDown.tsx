import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import BookingNotice from "./BookingNotice";
import BookingSummary from "./BookingSummary";

type TProps = {
  selectedDate: Date;
  massageEndTime: Date | null;
};

const BookingBreakDown = ({ selectedDate, massageEndTime }: TProps) => {
  return (
    <ReservationDetailStyle>
      <TitleStyle>※ 예약 내역</TitleStyle>
      <DetailBoxStyle>
        <BookingNotice />
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

const TitleStyle = styled.h2`
  font-size: 1.3rem;
  width: 100%;
  margin-bottom: 2rem;
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
