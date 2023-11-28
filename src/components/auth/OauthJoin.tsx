import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import KakaoLogin from "./KakaoLogin";
import NaverLogin from "./NaverLogin";

const OauthJoin = () => {
  return (
    <ContainerStyle>
      <OauthJoinBoxStyle>
        <HeaderStyle>회원가입</HeaderStyle>

        <span>아이디 비밀번호 입력없이 빠르고 간편하게</span>
        <span>클릭 한번으로 손쉬운 회원가입 하세요.</span>

        <MiddleBannerStyle>
          <div>회원만 누릴 수 있는 혜택!</div>
          <div>빠르고 간편하게 마사지 예약하기!</div>
          <div>다양한 EVENT 안내!</div>
        </MiddleBannerStyle>
        <ButtonBoxStyle>
          <KakaoLogin />
          <NaverLogin />
        </ButtonBoxStyle>
      </OauthJoinBoxStyle>
    </ContainerStyle>
  );
};

export default OauthJoin;

const ButtonBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContainerStyle = styled.div`
  width: 30rem;
  padding: 1rem;
  margin: 5rem auto;
  font-family: "Pretendard-Regular";
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 24rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.mobileWidth}) {
    width: 20rem;
  }
`;

const OauthJoinBoxStyle = styled.div`
  display: flex;
  flex-direction: column;

  span {
    padding: 0.3rem;
  }
`;

const HeaderStyle = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
`;

const MiddleBannerStyle = styled.div`
  text-align: center;
  padding: 1rem;
  margin-top: 1rem;
  border: 2px dotted lightgrey;
  border-radius: 10px;

  div {
    padding: 0.3rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 0.8rem;
  }
`;
