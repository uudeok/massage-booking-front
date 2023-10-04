import styled from "styled-components";
import Notices from "./notices/Notices";
import Introduction from "./introduction/Introduction";

const Information = () => {
  return (
    <InformationContainerStyle>
      <InformationInnerStyle>
        <InformationLeftBox>
          <Notices />
        </InformationLeftBox>
        <InformationRightBox>
          <Introduction />
        </InformationRightBox>
      </InformationInnerStyle>
    </InformationContainerStyle>
  );
};

export default Information;

const InformationContainerStyle = styled.div`
  width: 100%;
  min-height: 40vh;
  background-color: beige;
`;

const InformationInnerStyle = styled.div`
  display: flex;
  width: 100%;
`;

const InformationLeftBox = styled.div`
  width: 55%;
`;

const InformationRightBox = styled.div`
  width: 45%;
`;
