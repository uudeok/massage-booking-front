import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { useInput } from "../../hooks/useInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const { inputValue, changeInputHandler } = useInput({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const isValidEmail = email.includes("@") && email.trim().length > 5;
  const isValidPassword = password.trim().length >= 7;

  const onLoginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail || !isValidPassword) {
      setError("이메일 또는 비밀번호가 올바르지 않습니다");
      return;
    }

    // valid 검증 후, 로그인 API 요청
    localStorage.setItem("email", email);
    navigate("/");
  };

  return (
    <FormStyle onChange={changeInputHandler} onSubmit={onLoginHandler}>
      <HeaderStyle>로그인</HeaderStyle>
      <LabelStyle htmlFor="email">이메일</LabelStyle>
      <InputStyle
        type="email"
        required
        placeholder="이메일 주소를 입력해주세요"
        id="email"
        name="email"
        defaultValue={email}
      />
      <LabelStyle htmlFor="password">비밀번호</LabelStyle>
      <InputStyle
        type="password"
        required
        placeholder="비밀번호를 입력해주세요"
        id="password"
        name="password"
        defaultValue={password}
      />
      {error && <ErrorMessageStyle>{error}</ErrorMessageStyle>}
      <LoginButtonStyle>로그인</LoginButtonStyle>
      <BottomBoxStyle>
        <span>다른 계정으로 로그인</span>
        <div>
          <BottomButtonStyle>네이버</BottomButtonStyle>
          <BottomButtonStyle>카카오톡</BottomButtonStyle>
        </div>
      </BottomBoxStyle>
      <JoinBoxStyle>
        <JoinButtonStyle>회원가입</JoinButtonStyle>
      </JoinBoxStyle>
    </FormStyle>
  );
};

export default LoginForm;

const FormStyle = styled.form`
  width: 80%;
  padding: 1rem;
  margin: auto;
  font-family: "Pretendard-Regular";
  display: flex;
  flex-direction: column;
`;

const HeaderStyle = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
`;

const LabelStyle = styled.label`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const InputStyle = styled.input`
  margin-bottom: 1rem;
  padding: 0.7rem;
  font-family: "Pretendard-Regular";
`;

const LoginButtonStyle = styled.button`
  margin-top: 1rem;
  padding: 0.8rem;
  font-family: "Pretendard-Regular";
  background-color: #afc9a4;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  height: 2.5rem;

  &:hover {
    border: 1px solid whitesmoke;
  }
`;

const BottomBoxStyle = styled.div`
  margin-top: 2rem;
  border-top: 1px solid lightgrey;
  padding: 1rem;
  text-align: center;

  div {
    @media only screen and (max-width: ${MEDIA_QUERY.mobileWidth}) {
      display: flex;
      flex-direction: column;
    }
  }
`;

const BottomButtonStyle = styled.button`
  background-color: white;
  width: 45%;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 1rem;
  margin-top: 1rem;
  border: 1px solid lightgrey;

  &:hover {
    border: 1px solid #afc9a4;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.mobileWidth}) {
    width: 100%;
  }
`;

const JoinBoxStyle = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const JoinButtonStyle = styled.button`
  width: 100%;
  height: 3rem;
  padding: 1rem;
  border: none;
  cursor: pointer;
  /* background-color: #afc9a4; */
  color: black;
  border-radius: 5px;
`;

const ErrorMessageStyle = styled.span`
  color: red;
  font-size: 0.9rem;
`;
