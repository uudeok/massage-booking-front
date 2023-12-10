import NoticeMainItem from "./NoticeMainItem";
import styled from "styled-components";
import { useGetNoticeListQuery } from "../../../../api/notice/noticeQuery";
import LoadingBar from "../../../loading/LoadingBar";

const NoticesMainList = () => {
  const { data } = useGetNoticeListQuery({
    pageNumber: 1,
    pageSize: 5,
    // 최신순 5개 글만 가져옴
  });

  if (!data) return <LoadingBar />;
  const noticeList = data.notices;

  return (
    <NoticeBoxStyle>
      {noticeList &&
        noticeList.map((notice) => (
          <NoticeItemBoxStyle key={notice.id}>
            <NoticeMainItem notice={notice} />
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
