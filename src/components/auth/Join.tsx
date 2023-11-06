import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import KakaoButton from "../common/button/KakaoButton";
import DefaultButton from "../common/button/DefaultButton";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <ContainerStyle>
      <KakaoLoginBoxStyle>
        <HeaderStyle>회원가입</HeaderStyle>
        <span>아이디 비밀번호 입력없이 빠르고 간편하게</span>
        <span>클릭 한번으로 손쉬운 카카오톡 회원가입 하세요.</span>
        <KakaoButton>카카오톡 회원가입</KakaoButton>
      </KakaoLoginBoxStyle>
      <MiddleBannerStyle>
        <div>회원만 누릴 수 있는 혜택!</div>
        <div>다양한 EVENT 안내!</div>
        <div>현금처럼 쓸 수 있는 적립금 혜택</div>
      </MiddleBannerStyle>
      <MemberJoinBoxStyle>
        <span>또는</span>
        <DefaultButton>
          <Link to="/register">이메일&비밀번호 회원가입하기</Link>
        </DefaultButton>
      </MemberJoinBoxStyle>
    </ContainerStyle>
  );
};

export default Join;

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

const KakaoLoginBoxStyle = styled.div`
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
  margin-top: 2rem;

  div {
    padding: 0.3rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 0.8rem;
  }
`;

const MemberJoinBoxStyle = styled.div`
  padding: 1rem;
  border-top: 1px dotted lightgrey;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 2rem;

  span {
    color: grey;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;
