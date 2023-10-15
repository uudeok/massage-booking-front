import styled from "styled-components";
import MassageSlide from "./MassageSlide";
import { DEVISE_SIZE } from "../../const/devise";

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

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMax}) {
    min-height: 25vh;
  }
`;

const MassageInnerBoxStyle = styled.div`
  width: 70%;
  height: 35vh;
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMax}) {
    min-height: 15vh;
  }
`;
