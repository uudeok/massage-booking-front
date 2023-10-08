import styled from "styled-components";
import MassageSlide from "./MassageSlide";

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
`;

const MassageInnerBoxStyle = styled.div`
  width: 70%;
  min-height: 40vh;
  margin: auto;
  justify-content: center;
`;
