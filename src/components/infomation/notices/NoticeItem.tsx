import styled from "styled-components";
import { INotice } from "../../../@types/notice";

const NoticeItem = ({ item }: { item: INotice }) => {
  return (
    <NoticeItemBoxStyle>
      <NoticeItemTitleBoxStyle>{item.title}</NoticeItemTitleBoxStyle>
      <NoticeItemDateBoxStyle>{item.date}</NoticeItemDateBoxStyle>
    </NoticeItemBoxStyle>
  );
};

export default NoticeItem;

const NoticeItemBoxStyle = styled.li`
  border-top: 1px solid black;
  padding: 1rem;
  display: flex;
`;

const NoticeItemTitleBoxStyle = styled.div`
  flex: 1;
`;

const NoticeItemDateBoxStyle = styled.div`
  color: grey;
`;
