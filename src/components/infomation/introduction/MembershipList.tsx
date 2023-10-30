import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";
import Banner from "../../banner/Banner";

const MembershipList = () => {
  return (
    <Banner img="membership.jpg">
      <BannerTitleStyle>자연치유 쉼 멤버쉽 할인</BannerTitleStyle>
      <span>자연치유 쉼 회원권으로</span>
      <span>합리적인 가격으로 마사지를 받아보세요.</span>
    </Banner>
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
