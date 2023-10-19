import styled from "styled-components";
import { INotice } from "../../../@types/notice";
import { NOTICE_CATEGORIES } from "../../../const/notices";
import { Link } from "react-router-dom";
import { MEDIA_QUERY } from "../../../const/devise";

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

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    display: none;
  }
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
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  text-align: center;
`;

const ContentStyle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    border-bottom: 1px solid lightgrey;
  }
`;

const ContentSortStyle = styled.div`
  width: 20%;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    display: none;
  }
`;

const ContentTitleStyle = styled.div`
  flex: 1;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    text-align: left;
    font-size: 0.9rem;
  }
`;

const ContentDateStyle = styled.div`
  width: 10%;
  font-size: 0.8rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    text-align: right;
    width: 20%;
    font-size: 0.5rem;
  }
`;

const ContentViewStyle = styled.div`
  width: 10%;
  font-size: 0.8rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    display: none;
  }
`;
