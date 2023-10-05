import styled from "styled-components";
import NoticesList from "./NoticesList";
import { Link } from "react-router-dom";

const Notices = () => {
  return (
    <>
      <NoticeHeaderBoxStyle>
        <NoticeHeaderStyle>알려드립니다</NoticeHeaderStyle>
        <Link to="/">
          <div>목록보기</div>
        </Link>
      </NoticeHeaderBoxStyle>
      <NoticesList />
    </>
  );
};

export default Notices;

const NoticeHeaderBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const NoticeHeaderStyle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  flex: 1;
`;
