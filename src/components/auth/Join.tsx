import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";

const JoinForm = () => {
  return (
    <ContainerStyle>
      <KakaoLoginBoxStyle>
        <HeaderStyle>회원가입</HeaderStyle>
        <span>아이디 비밀번호 입력없이 빠르고 간편하게</span>
        <span>클릭 한번으로 손쉬운 카카오톡 회원가입 하세요.</span>
        <KakaoButtonStyle>카카오톡 회원가입</KakaoButtonStyle>
      </KakaoLoginBoxStyle>
      <MiddleBannerStyle>
        <div>자연치유 쉼의 회원만 누릴 수 있는 혜택!</div>
        <div>다양한 EVENT 안내!</div>
        <div>적립금 1~3% 혜택</div>
        <div>회원가입시 1,000원 할인쿠폰</div>
      </MiddleBannerStyle>
      <MemberJoinBoxStyle>
        <span>또는</span>
        <JoinButtonStyle>아이디&비밀번호 회원가입하기</JoinButtonStyle>
      </MemberJoinBoxStyle>
    </ContainerStyle>
  );
};

export default JoinForm;

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

const KakaoButtonStyle = styled.button`
  font-family: "Pretendard-Regular";
  background-color: #fee500;
  background-image: url(//storage.keepgrow.com/admin/campaign/20200611043456590.svg);
  background-repeat: no-repeat;
  background-position: 20px;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 17px;
  cursor: pointer;
  margin-top: 1rem;
  color: black;
`;

const MiddleBannerStyle = styled.div`
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;

  div {
    padding: 0.3rem;
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

const JoinButtonStyle = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 17px;
  cursor: pointer;
  margin-top: 1rem;
  font-family: "Pretendard-Regular";
  color: black;
`;
