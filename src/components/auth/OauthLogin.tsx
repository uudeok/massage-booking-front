import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import KakaoLogin from "./KakaoLogin";
import NaverLogin from "./NaverLogin";

const OauthLogin = () => {
  return (
    <>
      <HeaderStyle>로그인</HeaderStyle>
      <MiddleBannerStyle>
        <span>아이디 비밀번호 입력없이 빠르고 간편하게</span>
        <span>클릭 한번으로 손쉬운 로그인 하세요.</span>
      </MiddleBannerStyle>
      <BannerStyle>
        <div>회원만 누릴 수 있는 혜택!</div>
        <div>빠르고 간편한 마사지 예약!</div>
        <div>다양한 EVENT 안내!</div>
      </BannerStyle>
      <BottomBoxStyle>
        <KakaoLogin />
        <NaverLogin />
      </BottomBoxStyle>
    </>
  );
};

export default OauthLogin;

const HeaderStyle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-weight: bold;
`;

const BottomBoxStyle = styled.div`
  margin-top: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 90%;
    margin: auto;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    width: 100%;
  }
`;

const BannerStyle = styled.div`
  text-align: center;
  padding: 1rem;
  margin-top: 1rem;
  border: 2px dotted lightgrey;
  border-radius: 10px;
  font-family: "Pretendard-Regular";
  /* background-color: #555555;
  color: white;
  border: none; */

  div {
    padding: 0.3rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 0.8rem;
  }
`;

const MiddleBannerStyle = styled.div`
  font-family: "Pretendard-Regular";
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 0.8rem;
  }
`;
