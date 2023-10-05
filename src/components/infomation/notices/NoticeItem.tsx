import styled from "styled-components";
import { INotice } from "../../../@types/notice";
import { Link } from "react-router-dom";

const NoticeItem = ({ item }: { item: INotice }) => {
  return (
    <>
      <NoticeItemTitleStyle>
        <Link to="/">{item.title}</Link>
      </NoticeItemTitleStyle>
      <NoticeItemDateStyle>{item.date}</NoticeItemDateStyle>
    </>
  );
};

export default NoticeItem;

const NoticeItemTitleStyle = styled.span`
  flex: 1;

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const NoticeItemDateStyle = styled.div`
  color: grey;
`;
