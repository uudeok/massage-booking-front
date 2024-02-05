import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";

const Membership = () => {
  return (
    <ContainerStyle>
      <ImgStyle src="leaf.jpg" alt="자연치유 쉼" width="100%" height="100%" />
      <Link to="/information">
        <ContentStyle>
          <span>또 찾고 싶은 곳 자연치유 쉼</span>
          <button>회원제 알아보기</button>
        </ContentStyle>
      </Link>
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
  overflow: hidden;
  margin-bottom: 1rem;
`;

const ImgStyle = styled.img`
  object-fit: cover;
  height: 23rem;
  overflow: hidden;
  border-radius: 15px;

  &:hover {
    border: 2px solid whitesmoke;
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
  font-family: ${theme.fonts.gmarket};
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
    font-family: ${theme.fonts.gmarket};
    font-weight: bold;
    font-size: 1rem;
  }

  @media only screen and (max-width: ${theme.devise.notebookWidth}) {
    font-size: 1.2rem;
  }
`;
