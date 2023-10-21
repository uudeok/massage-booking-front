import styled from "styled-components";
import MassageSlide from "./MassageSlide";
import { MEDIA_QUERY } from "../../const/devise";

const Massage = () => {
  return (
    <MassageContainerStyle>
      <MassageInnerBoxStyle>
        <MassageSlide />
      </MassageInnerBoxStyle>
    </MassageContainerStyle>
  );
};

export default Massage;

const MassageContainerStyle = styled.div`
  width: 100%;
  height: 45vh;
  /* background-color: whitesmoke; */
  display: flex;

  @media only screen and (max-width: ${MEDIA_QUERY.mobileWidth}) {
    height: 40vh;
  }
`;

const MassageInnerBoxStyle = styled.div`
  width: 70%;
  height: 40vh;
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;

  @media only screen and (max-width: ${MEDIA_QUERY.mobileWidth}) {
    height: 35vh;
  }
`;
