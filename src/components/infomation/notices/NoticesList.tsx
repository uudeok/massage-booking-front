import NoticeItem from "./NoticeItem";
import { NOTICE_LIST } from "../../../const/notices";
import styled from "styled-components";

const NoticesList = () => {
  return (
    <ul style={{ borderTop: "1px solid black", marginBottom: "1rem" }}>
      {NOTICE_LIST.map((item) => (
        <NoticeItemBoxStyle key={item.date}>
          <NoticeItem item={item} />
        </NoticeItemBoxStyle>
      ))}
    </ul>
  );
};

export default NoticesList;

const NoticeItemBoxStyle = styled.ul`
  border-bottom: 1px solid black;
  padding: 1rem;
  display: flex;
`;
