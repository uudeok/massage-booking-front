import Card from "../common/card/Card";
import styled from "styled-components";

const MemberWithdrawal = () => {
  return (
    <Card>
      <TitleBoxStyle>
        <h2>회원탈퇴</h2>
        <ButtonStyle>탈퇴</ButtonStyle>
      </TitleBoxStyle>
      <p>자연치유 쉼 회원 탈퇴하기</p>
    </Card>
  );
};

export default MemberWithdrawal;

const TitleBoxStyle = styled.div`
  display: flex;
  margin-bottom: 1rem;

  h2 {
    flex: 1;
    font-size: 1.2rem;
  }
`;

const ButtonStyle = styled.button`
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid lightgrey;
  cursor: pointer;
`;
