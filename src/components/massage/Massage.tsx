import styled from "styled-components";
import MassageList from "./MassageList";

const MassageContainerStyle = styled.div`
  width: 100%;
  min-height: 40vh;
  background-color: lavenderblush;
`;

const Massage = () => {
  return (
    <MassageContainerStyle>
      <MassageList />
    </MassageContainerStyle>
  );
};

export default Massage;
