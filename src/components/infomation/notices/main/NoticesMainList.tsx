import NoticeMainItem from "./NoticeMainItem";
import styled from "styled-components";
import { useGetLatestNoticeListQuery } from "../../../../api/notice/noticeQuery";

const NoticesMainList = () => {
  const { data: noticeList } = useGetLatestNoticeListQuery();

  return (
    <NoticeBoxStyle>
      {noticeList &&
        noticeList.map((item) => (
          <NoticeItemBoxStyle key={item.date}>
            <NoticeMainItem item={item} />
          </NoticeItemBoxStyle>
        ))}
    </NoticeBoxStyle>
  );
};

export default NoticesMainList;

const NoticeBoxStyle = styled.ul`
  border-top: 1px solid lightgrey;
  margin-bottom: 1rem;
`;

const NoticeItemBoxStyle = styled.li`
  border-bottom: 1px solid lightgrey;
  padding: 1.2rem;
  display: flex;
`;
