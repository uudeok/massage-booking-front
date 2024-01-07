import styled from "styled-components";
import Membership from "../introduction/Membership";
import NoticeMain from "./notices/main/NoticeMain";
import theme from "../../styles/theme";

const Information = () => {
  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <LeftBoxStyle>
          <NoticeMain />
        </LeftBoxStyle>
        <RightBoxStyle>
          <Membership />
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
  font-family: ${theme.fonts.pretend};

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    width: 100%;
  }
`;

const InnerBoxStyle = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    flex-direction: column;
  }
`;

const LeftBoxStyle = styled.div`
  width: 55%;
  margin-top: 1rem;
  margin-right: 1rem;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    width: 100%;
  }
`;

const RightBoxStyle = styled.div`
  width: 45%;
  margin-top: 1rem;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    width: 100%;
  }
`;
