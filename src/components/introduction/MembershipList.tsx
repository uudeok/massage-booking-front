import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import Banner from "../banner/Banner";

const MembershipList = () => {
  return (
    <>
      <Banner img="membership.jpg">
        <BannerTitleStyle>자연치유 쉼 멤버쉽 할인</BannerTitleStyle>
        <span>자연치유 쉼 회원권으로</span>
        <span>합리적인 가격으로 마사지를 받아보세요.</span>
      </Banner>
      <ContainerStyle>
        <InnerBoxStyle>
          <TitleStyle>회원권 안내</TitleStyle>
          <hr style={{ marginBottom: "3rem" }}></hr>
          <ImgBoxStyle src="brochure.jpg" alt="가격표" />
        </InnerBoxStyle>
      </ContainerStyle>
    </>
  );
};

export default MembershipList;

const BannerTitleStyle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 1.2rem;
  }
`;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "GmarketSansMedium";
`;

const InnerBoxStyle = styled.ul`
  width: 65rem;
  margin: auto;
  padding: 3rem;

  @media only screen and (max-width: ${MEDIA_QUERY.bigNotebookWidth}) {
    width: 60%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
  }
`;

const TitleStyle = styled.h1`
  font-size: 2rem;
  margin-top: 3rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 1.5rem;
  }
`;

const ItemBoxStyle = styled.li`
  text-align: center;
  padding: 1rem;
`;

const ImgBoxStyle = styled.img`
  margin: auto;
  display: flex;
`;
