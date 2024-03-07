import styled from "styled-components";
import Banner from "../banner/Banner";
import theme from "../../styles/theme";

const MembershipList = () => {
  return (
    <>
      <Banner img="membershipbanner.webp" />
      <ContainerStyle>
        <InnerBoxStyle>
          <TitleStyle>회원권 안내</TitleStyle>
          <h2>Update soon...😉</h2>
        </InnerBoxStyle>
      </ContainerStyle>
    </>
  );
};

export default MembershipList;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "GmarketSansMedium";
`;

const InnerBoxStyle = styled.ul`
  width: 65rem;
  margin: auto;
  padding: 3rem;
  text-align: center;

  @media only screen and (max-width: ${theme.devise.bigNotebookWidth}) {
    width: 60%;
  }

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    width: 100%;
  }
`;

const TitleStyle = styled.h1`
  font-size: 2rem;
  margin-top: 3rem;
  text-align: left;
  margin-bottom: 2rem;
  border-bottom: 1px solid black;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    font-size: 1.5rem;
  }
`;
