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
  min-height: 45vh;
  /* background-color: #ecf2ea; */
  background-color: whitesmoke;
  display: flex;

  @media only screen and (max-width: ${MEDIA_QUERY.mobileWidth}) {
    min-height: 40vh;
  }
`;

const MassageInnerBoxStyle = styled.div`
  width: 70%;
  height: 35vh;
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;
`;
