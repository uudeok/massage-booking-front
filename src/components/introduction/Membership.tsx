import styled from "styled-components";
import { Link } from "react-router-dom";
import { MEDIA_QUERY } from "../../const/devise";

const Membership = () => {
  return (
    <ContainerStyle>
      <ImgBoxStyle>
        <img src="leaf.jpg" alt="자연치유 쉼" width="100%" height="100%" />
        <ContentStyle>
          <span>또 찾고 싶은 곳 자연치유 쉼</span>
          <Link to="/information">
            <button>회원제 알아보기</button>
          </Link>
        </ContentStyle>
      </ImgBoxStyle>
    </ContainerStyle>
  );
};

export default Membership;

const ContainerStyle = styled.div`
  width: 100%;
  height: 25rem;
  padding: 1rem;
  opacity: 0.7;
  filter: brightness(0.95);
`;

const ImgBoxStyle = styled.div`
  border-radius: 15px;
  overflow: hidden;
  height: 100%;
  cursor: pointer;
  z-index: 0;

  &:hover {
    border: 2px solid whitesmoke;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    height: 100%;
  }
`;

const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 15rem;
  color: white;
  font-size: 1.6rem;
  z-index: 1;
  font-family: "GmarketSansMedium";
  left: 2rem;
  font-weight: 900;

  button {
    width: 10rem;
    padding: 0.7rem;
    margin-top: 1.5rem;
    background-color: inherit;
    cursor: pointer;
    border: 2px solid white;
    color: white;
    font-family: "GmarketSansMedium";
    font-weight: bold;
    font-size: 1rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    font-size: 1.3rem;
  }
`;
