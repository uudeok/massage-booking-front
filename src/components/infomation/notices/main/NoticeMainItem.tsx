import styled from "styled-components";
import { TNoticeDetail } from "../../../../@types/notice";
import { Link } from "react-router-dom";
import { MEDIA_QUERY } from "../../../../const/devise";
import { makeSliceDate } from "../../../../util/date";

const NoticeMainItem = ({ notice }: { notice: TNoticeDetail }) => {
  const createdAt = makeSliceDate(notice.createdAt);

  return (
    <>
      <NoticeItemTitleStyle>
        <Link to={`/notice/${notice.id}`}>{notice.title}</Link>
      </NoticeItemTitleStyle>
      <NoticeItemDateStyle>{createdAt}</NoticeItemDateStyle>
    </>
  );
};

export default NoticeMainItem;

const NoticeItemTitleStyle = styled.span`
  flex: 1;

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 0.9rem;
  }
`;

const NoticeItemDateStyle = styled.div`
  color: grey;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 0.85rem;
  }
`;
