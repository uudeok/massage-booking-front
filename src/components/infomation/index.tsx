import styled from "styled-components";
import Notices from "./notices/Notices";
import Introduction from "./introduction/Introduction";
import { DEVISE_SIZE } from "../../const/devise";

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
  width: 70%;
  min-height: 40vh;
  margin: 0 auto;
  /* background-color: beige; */
`;

const InformationInnerStyle = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMax}) {
    flex-direction: column;
  }
`;

const InformationLeftBox = styled.div`
  width: 55%;
  margin-top: 1rem;

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMax}) {
    width: 100%;
  }
`;

const InformationRightBox = styled.div`
  width: 45%;

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMax}) {
    width: 100%;
  }
`;
