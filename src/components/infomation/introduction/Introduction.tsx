import styled from "styled-components";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <IntroductionBoxStyle>
      <Link to="/">
        <IntroductionImgBoxStyle>
          <img src="noimg.gif" alt="자연치유쉼" width="100%" height="100%" />
        </IntroductionImgBoxStyle>
      </Link>
    </IntroductionBoxStyle>
  );
};

export default Introduction;

const IntroductionBoxStyle = styled.div`
  /* border: 1px solid black; */
  padding: 2rem;
  height: 100%;
`;

const IntroductionImgBoxStyle = styled.div`
  height: 100%;

  :hover {
    border: 1px solid lightgray;
  }
`;
