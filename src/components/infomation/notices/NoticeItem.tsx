import styled from "styled-components";
import { INotice } from "../../../@types/notice";
import { NOTICE_CATEGORIES } from "../../../const/notices";
import { Link } from "react-router-dom";

const NoticeItem = ({ notice }: { notice: INotice[] }) => {
  return (
    <>
      <HeaderStyle>
        <SortStyle>구분</SortStyle>
        <TitleStyle>제목</TitleStyle>
        <DateStyle>작성일</DateStyle>
        <ViewStyle>조회수</ViewStyle>
      </HeaderStyle>
      <ContentBoxStyle>
        {notice.map((item) => (
          <ContentStyle key={item.id}>
            <ContentSortStyle>
              {NOTICE_CATEGORIES[item.category]}
            </ContentSortStyle>
            <ContentTitleStyle>
              <Link to={`/notice/${item.id}`}>{item.title}</Link>
            </ContentTitleStyle>
            <ContentDateStyle>{item.date}</ContentDateStyle>
            <ContentViewStyle>{item.id}</ContentViewStyle>
          </ContentStyle>
        ))}
      </ContentBoxStyle>
    </>
  );
};

export default NoticeItem;

const HeaderStyle = styled.div`
  display: flex;
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid black;
`;

const SortStyle = styled.div`
  width: 20%;
`;

const TitleStyle = styled.div`
  flex: 1;
`;

const DateStyle = styled.div`
  width: 10%;
`;

const ViewStyle = styled.div`
  width: 10%;
`;

const ContentBoxStyle = styled.div`
  border: 1px solid black;
  border-top: none;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  text-align: center;
`;

const ContentStyle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

const ContentSortStyle = styled.div`
  width: 20%;
`;

const ContentTitleStyle = styled.div`
  flex: 1;

  &:hover {
    text-decoration: underline;
  }
`;

const ContentDateStyle = styled.div`
  width: 10%;
  font-size: 0.8rem;
`;

const ContentViewStyle = styled.div`
  width: 10%;
  font-size: 0.8rem;
`;
