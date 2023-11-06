import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";

const WithdrawalForm = () => {
  const onWithdrawalHandler = () => {
    // 탈퇴 요청 API
  };

  return (
    <InnerBoxStyle>
      <TitleStyle>회원탈퇴</TitleStyle>
      <ContentBoxStyle>
        <span>회원탈퇴 시, 다시 복구가 불가합니다.</span>
        <span>정말 탈퇴하시겠습니까?</span>
      </ContentBoxStyle>
      <ButtonBoxStyle>
        <ButtonStyle onClick={onWithdrawalHandler}>탈퇴하기</ButtonStyle>
      </ButtonBoxStyle>
    </InnerBoxStyle>
  );
};

export default WithdrawalForm;

const InnerBoxStyle = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  font-family: "Pretendard-Regular";
  color: whitesmoke;
`;

const TitleStyle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  height: 3rem;
`;

const ContentBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.5rem;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    font-size: 1rem;
  }
`;

const ButtonBoxStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonStyle = styled.button`
  background-color: white;
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  width: 10rem;
  border: 2px solid lightgrey;
  border-radius: 10px;
  color: #a4b69c;
  font-family: "Pretendard-Regular";

  &:hover {
    border: 2px double white;
  }
`;
