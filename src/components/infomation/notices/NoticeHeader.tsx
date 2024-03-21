import styled from "styled-components";
import theme from "../../../styles/theme";

const NoticeHeader = () => {
  return (
    <HeaderStyle>
      <SortStyle>구분</SortStyle>
      <TitleStyle>제목</TitleStyle>
      <DateStyle>작성일</DateStyle>
      <ViewStyle>조회수</ViewStyle>
    </HeaderStyle>
  );
};

export default NoticeHeader;

const HeaderStyle = styled.div`
  display: flex;
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid black;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
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
