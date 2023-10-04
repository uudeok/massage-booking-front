import styled from "styled-components";
import MassageSlide from "./MassageSlide";

const MassageContainerStyle = styled.div`
  width: 100%;
  min-height: 40vh;
  background-color: lavenderblush;
`;

const Massage = () => {
  return (
    <MassageContainerStyle>
      <MassageSlide />
    </MassageContainerStyle>
  );
};

export default Massage;
