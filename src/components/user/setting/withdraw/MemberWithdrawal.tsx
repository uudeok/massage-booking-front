import { MEDIA_QUERY } from "../../../../const/devise";
import styled from "styled-components";

const MemberWithdrawal = () => {
  return (
    <ContainerStyle>
      <HeaderStyle>‖ 회원 탈퇴</HeaderStyle>
      <CardBoxStyle>
        <CardLayoutStyle>
          <TitleBoxStyle>
            <h2>회원탈퇴</h2>
            <ButtonStyle>탈퇴</ButtonStyle>
          </TitleBoxStyle>
          <p>자연치유 쉼 회원 탈퇴하기.</p>
        </CardLayoutStyle>
      </CardBoxStyle>
    </ContainerStyle>
  );
};

export default MemberWithdrawal;

const ContainerStyle = styled.div`
  width: 100%;
`;

const HeaderStyle = styled.h2`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  padding: 1rem;
`;

const TitleBoxStyle = styled.div`
  display: flex;
  margin-bottom: 1rem;

  h2 {
    flex: 1;
    font-size: 1.2rem;
  }
`;

const CardLayoutStyle = styled.div`
  border-radius: 10px;
  border: 1px solid lightgrey;
  padding: 1rem;
  min-height: 6rem;
  margin-bottom: 1rem;
  width: 100%;
  font-family: "Pretendard-Regular";
`;

const ButtonStyle = styled.button`
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid lightgrey;
  cursor: pointer;
  color: black;
`;

const CardBoxStyle = styled.div`
  width: 60%;
  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    padding: 1rem;
    width: 100%;
  }
`;
