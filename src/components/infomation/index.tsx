import styled from "styled-components";
import Notices from "./notices/Notices";
import Introduction from "./introduction/Introduction";
import { DEVISE_SIZE } from "../../const/devise";

const Information = () => {
  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <LeftBoxStyle>
          <Notices />
        </LeftBoxStyle>
        <RightBoxStyle>
          <Introduction />
        </RightBoxStyle>
      </InnerBoxStyle>
    </ContainerStyle>
  );
};

export default Information;

const ContainerStyle = styled.div`
  width: 70%;
  min-height: 40vh;
  margin: 0 auto;
  font-family: "Pretendard-Regular";

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMax}) {
    width: 100%;
  }
`;

const InnerBoxStyle = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMax}) {
    flex-direction: column;
  }
`;

const LeftBoxStyle = styled.div`
  width: 55%;
  margin-top: 1rem;
  margin-right: 1rem;

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMax}) {
    width: 100%;
  }
`;

const RightBoxStyle = styled.div`
  width: 45%;
  margin-top: 1rem;

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMax}) {
    width: 100%;
  }
`;
