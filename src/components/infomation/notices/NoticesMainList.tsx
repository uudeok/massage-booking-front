import NoticeMainItem from "./NoticeMainItem";
import { NOTICE_LIST } from "../../../const/notices";
import styled from "styled-components";

const NoticesMainList = () => {
  /// 공지사항 최신글 5개만 가져와서 뿌려준다.

  return (
    <NoticeBoxStyle>
      {NOTICE_LIST.map((item) => (
        <NoticeItemBoxStyle key={item.date}>
          <NoticeMainItem item={item} />
        </NoticeItemBoxStyle>
      ))}
    </NoticeBoxStyle>
  );
};

export default NoticesMainList;

const NoticeBoxStyle = styled.ul`
  border-top: 1px solid grey;
  margin-bottom: 1rem;
`;

const NoticeItemBoxStyle = styled.li`
  border-bottom: 1px solid grey;
  padding: 1.2rem;
  display: flex;
`;
