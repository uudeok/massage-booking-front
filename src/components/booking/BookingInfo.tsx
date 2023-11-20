import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";

const BookingInfo = () => {
  return (
    <CalendarStyle>
      <TitleStyle>3. 확인</TitleStyle>
      <div></div>
    </CalendarStyle>
  );
};

export default BookingInfo;

const CalendarStyle = styled.div`
  padding: 1rem;
  width: 33%;
  text-align: center;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }
`;

const TitleStyle = styled.h2`
  font-size: 1.3rem;
  padding: 0.5rem;
`;
