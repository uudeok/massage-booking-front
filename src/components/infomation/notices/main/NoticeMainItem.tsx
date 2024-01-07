import styled from "styled-components";
import { TNoticeDetail } from "../../../../@types/notice";
import { Link } from "react-router-dom";
import { makeSimpleDate } from "../../../../util/date";
import theme from "../../../../styles/theme";

const NoticeMainItem = ({ notice }: { notice: TNoticeDetail }) => {
  const createdAt = makeSimpleDate(notice.createdAt);

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

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    font-size: 0.9rem;
  }
`;

const NoticeItemDateStyle = styled.div`
  color: ${theme.palette.grey};

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    font-size: 0.85rem;
  }
`;
