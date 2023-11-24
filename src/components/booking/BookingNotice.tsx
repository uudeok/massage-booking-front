import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { BOOKING_NOTICE } from "../../const/book/massage";

const BookingNotice = () => {
  return (
    <NoticeBoxStyle>
      {BOOKING_NOTICE.map((item) => (
        <NoticeItemStyle key={item.id}>• {item.content}</NoticeItemStyle>
      ))}
    </NoticeBoxStyle>
  );
};

export default BookingNotice;

const NoticeBoxStyle = styled.div`
  padding: 1rem;
  border: 1px dotted lightgrey;
  text-align: left;
`;

const NoticeItemStyle = styled.li`
  display: flex;
  line-height: 1.2rem;
  padding: 0.5rem;
  font-size: 0.9rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 0.8rem;
  }
`;
