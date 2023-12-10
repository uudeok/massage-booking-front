import styled from "styled-components";
import { MEDIA_QUERY } from "../../../../const/devise";

type TProps = {
  onClose: () => void;
};

const WithdrawalForm = ({ onClose }: TProps) => {
  const onWithdrawalHandler = () => {
    // 탈퇴 요청 API
  };

  return (
    <InnerBoxStyle>
      <ContentBoxStyle>
        <span>회원탈퇴 시, 다시 복구가 불가합니다.</span>
        <span>정말 탈퇴하시겠습니까?</span>
      </ContentBoxStyle>
      <ButtonBoxStyle>
        <button onClick={onClose}>취소하기</button>
        <button onClick={onWithdrawalHandler}>탈퇴하기</button>
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
  height: 100%;
  justify-content: center;
`;

const ContentBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.5rem;
  flex: 1;
  justify-content: center;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    font-size: 1rem;
  }
`;

const ButtonBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ButtonStyle = styled.button`
  background-color: white;
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  width: 10rem;
  border: 2px solid lightgrey;
  border-radius: 10px;
  font-family: "Pretendard-Regular";

  &:hover {
    border: 2px double white;
  }
`;
