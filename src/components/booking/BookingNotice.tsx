import styled from "styled-components";
import { BOOKING_NOTICE } from "../../const/book/massage";
import RenderList from "../common/map/DynamicRender";
import theme from "../../styles/theme";
import React from "react";

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

export default React.memo(BookingNotice);

const NoticeBoxStyle = styled.ul`
  padding: 1rem;
  border: 1px dotted lightgrey;
  text-align: left;
  background-color: whitesmoke;
  width: 50%;

  @media only screen and (max-width: ${theme.devise.notebookWidth}) {
    width: 100%;
    margin-top: 1.5rem;
  }
`;

const NoticeItemStyle = styled.li`
  display: flex;
  line-height: 1.2rem;
  padding: 0.5rem;
  font-size: 0.9rem;
  margin-top: 0.5rem;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    font-size: 0.8rem;
  }
`;
