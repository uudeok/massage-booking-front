import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { Link } from "react-router-dom";
import KakaoButton from "../common/button/KakaoButton";
import NaverButton from "../common/button/NaverButton";

const OauthLogin = () => {
  return (
    <>
      <HeaderStyle>로그인</HeaderStyle>
      <MiddleBannerStyle>
        <span>아이디 비밀번호 입력없이 빠르고 간편하게</span>
        <span>클릭 한번으로 손쉬운 로그인 하세요.</span>
      </MiddleBannerStyle>
      <BottomBoxStyle>
        <KakaoButton>카카오톡 로그인</KakaoButton>
        <NaverButton>네이버 로그인</NaverButton>
        <JoinButtonStyle>
          <Link to="/join">회원가입 하러가기</Link>
        </JoinButtonStyle>
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
  margin-top: 2rem;
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

const JoinButtonStyle = styled.button`
  font-family: "Pretendard-Regular";
  border: none;
  cursor: pointer;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  background-color: whitesmoke;
  color: black;
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
