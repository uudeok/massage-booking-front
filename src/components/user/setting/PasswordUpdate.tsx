import Card from "../../common/card/Card";
import styled from "styled-components";

const PasswordUpdate = () => {
  const changePasswordHandler = () => {};

  return (
    <Card>
      <TitleBoxStyle>
        <h2>비밀번호 수정</h2>
        <ButtonStyle onClick={changePasswordHandler}>변경</ButtonStyle>
      </TitleBoxStyle>
      <p>회원님의 소중한 개인정보를 위해 비밀번호를 주기적으로 변경해주세요.</p>
    </Card>
  );
};

export default PasswordUpdate;

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
  color: black;
`;
