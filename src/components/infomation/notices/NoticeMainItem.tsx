import styled from "styled-components";
import { TNotice } from "../../../@types/notice";
import { Link } from "react-router-dom";
import { MEDIA_QUERY } from "../../../const/devise";

const NoticeMainItem = ({ item }: { item: TNotice }) => {
  return (
    <>
      <NoticeItemTitleStyle>
        <Link to={`/notice/${item.id}`}>{item.title}</Link>
      </NoticeItemTitleStyle>
      <NoticeItemDateStyle>{item.date}</NoticeItemDateStyle>
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
