import styled from "styled-components";
import { useInput } from "../../../hooks/useInput";

const PasswordUpdateForm = () => {
  const { inputValue, changeInputHandler } = useInput({
    prevPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const { prevPassword, newPassword, newPasswordConfirm } = inputValue;

  const changePasswordHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(prevPassword, newPassword, newPasswordConfirm);
  };

  return (
    <>
      <HeaderStyle>비밀번호 변경</HeaderStyle>
      <FormStyle onSubmit={changePasswordHandler} onChange={changeInputHandler}>
        <LabelStyle htmlFor="prevPassword">기존 비밀번호</LabelStyle>
        <InputStyle
          type="password"
          id="prevPassword"
          name="prevPassword"
          required
          placeholder="기존 비밀번호를 입력해주세요."
        />
        <LabelStyle htmlFor="newPassword">새 비밀번호</LabelStyle>
        <InputStyle
          type="password"
          id="newPassword"
          name="newPassword"
          required
          placeholder="새로운 비밀번호를 입력하세요."
        />
        <LabelStyle htmlFor="newPasswordConfirm">새 비밀번호 확인</LabelStyle>
        <InputStyle
          type="password"
          id="newPasswordConfirm"
          name="newPasswordConfirm"
          required
          placeholder="비밀번호를 한번 더 입력해주세요."
        />
        <ButtonStyle>변경</ButtonStyle>
      </FormStyle>
    </>
  );
};

export default PasswordUpdateForm;

const FormStyle = styled.form`
  font-family: "Pretendard-Regular";
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 1rem;
`;

const HeaderStyle = styled.h2`
  font-size: 1.5rem;
  padding: 1rem;
  font-weight: bold;
`;

const LabelStyle = styled.label`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const InputStyle = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid lightgrey;
`;

const ButtonStyle = styled.button`
  padding: 1rem;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  font-family: "Pretendard-Regular";
  font-size: 1rem;
  background-color: #afc9a4;

  &:hover {
    color: whitesmoke;
    transition: all 0.326s ease-in-out;
  }
`;
