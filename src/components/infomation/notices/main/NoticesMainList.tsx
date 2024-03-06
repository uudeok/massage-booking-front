import { useGetNoticeListQuery } from "../../../../api/notice/noticeQuery";
import { TNoticeDetail } from "../../../../@types/notice";
import { Link } from "react-router-dom";
import { makeSimpleDate } from "../../../../util/date";
import theme from "../../../../styles/theme";
import styled from "styled-components";
import LoadingBar from "../../../loading/LoadingBar";
import RenderList from "../../../common/map/DynamicRender";

const NoticesMainList = () => {
  const { data } = useGetNoticeListQuery({
    pageNumber: 1,
    pageSize: 5,
    // 최신순 5개 글만 가져옴
  });

  if (!data) return <LoadingBar />;

  const noticeList = data.notices;

  const renderNoticeItem = (item: TNoticeDetail) => (
    <Self key={item.id}>
      <Title>
        <Link to={`/notice/${item.id}`}>{item.title}</Link>
      </Title>
      <Date>{makeSimpleDate(item.createdAt)}</Date>
    </Self>
  );

  return (
    <Container>
      <RenderList data={noticeList} renderItem={renderNoticeItem} />
    </Container>
  );
};

export default NoticesMainList;

const Container = styled.ul`
  border-top: 1px solid lightgrey;
  margin-bottom: 1rem;
`;

const Self = styled.li`
  border-bottom: 1px solid lightgrey;
  padding: 1.2rem;
  display: flex;
`;

const Title = styled.span`
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

const Date = styled.div`
  color: ${theme.palette.grey};

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    font-size: 0.85rem;
  }
`;
