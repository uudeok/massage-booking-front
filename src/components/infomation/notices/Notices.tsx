import styled from "styled-components";
import NoticesMainList from "./NoticesMainList";
import { Link } from "react-router-dom";
import { MEDIA_QUERY } from "../../../const/devise";

const Notices = () => {
  return (
    <ContainerStyle>
      <HeaderBoxStyle>
        <HeaderStyle>📢알려드립니다</HeaderStyle>
        <Link to="/notice">
          <div>목록보기</div>
        </Link>
      </HeaderBoxStyle>
      <NoticesMainList />
    </ContainerStyle>
  );
};

export default Notices;

const ContainerStyle = styled.div`
  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    width: 90%;
    margin: auto;
  }
`;

const HeaderBoxStyle = styled.div`
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

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    a {
      font-size: 0.8rem;
    }
  }
`;

const HeaderStyle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  flex: 1;
  font-family: "GmarketSansMedium";

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 1.7rem;
  }
`;
