import styled from "styled-components";
import { BOOKING_NOTICE } from "../../const/book/massage";
import RenderList from "../common/map/RenderList";
import theme from "../../styles/theme";

type noticeItemType = {
  content: string;
  id: number;
};

const BookingNotice = () => {
  const renderNoticeItem = (noticeItem: noticeItemType) => (
    <NoticeItemStyle key={noticeItem.id}>
      • {noticeItem.content}
    </NoticeItemStyle>
  );

  return (
    <NoticeBoxStyle>
      <RenderList data={BOOKING_NOTICE} renderItem={renderNoticeItem} />
    </NoticeBoxStyle>
  );
};

export default BookingNotice;

const NoticeBoxStyle = styled.ul`
  padding: 1rem;
  border: 1px dotted lightgrey;
  text-align: left;
`;

const NoticeItemStyle = styled.li`
  display: flex;
  line-height: 1.2rem;
  padding: 0.5rem;
  font-size: 0.9rem;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    font-size: 0.8rem;
  }
`;
