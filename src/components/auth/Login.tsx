import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { useInput } from "../../hooks/useInput";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      return;
    }

    /// 로그인 API 요청
    localStorage.setItem("email", email);
    navigate("/");

    // valid 검증 후, 로그인 API 요청
    // 1. 로그인 화면에서 로그인할 경우 로그인 후 메인으로가기
    // 2. 예약 화면에서 회원으로 예약하기해서 로그인할 경우 로그인 후 나의정보 화면으로 가기
  };

  return (
    <>
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
      </FormStyle>
      <BottomBoxStyle>
        <BottomTitleStyle>다른 계정으로 로그인</BottomTitleStyle>
        <BottomButtonStyle>카카오톡 로그인</BottomButtonStyle>
        <JoinButtonStyle>
          <Link to="/join">회원가입 하러가기</Link>
        </JoinButtonStyle>
      </BottomBoxStyle>
    </>
  );
};

export default LoginForm;

const FormStyle = styled.form`
  /* width: 30rem; */
  margin: 1rem auto;
  font-family: "Pretendard-Regular";
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 90%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    width: 100%;
  }
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
  font-family: "Pretendard-Regular";
  background-color: #afc9a4;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  height: 3rem;
  padding: 1rem;
  border-radius: 10px;
  font-size: 17px;

  &:hover {
    border: 1px solid whitesmoke;
  }
`;

const BottomBoxStyle = styled.div`
  margin-top: 2rem;
  border-top: 1px solid lightgrey;

  text-align: center;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 90%;
    margin: auto;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    width: 100%;
  }
`;

const BottomTitleStyle = styled.span`
  margin-top: 1rem;
`;

const BottomButtonStyle = styled.button`
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
  width: 100%;
  color: black;
  margin-bottom: 1rem;
`;

const JoinButtonStyle = styled.button`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: none;
  cursor: pointer;
  color: grey;
  border-radius: 10px;
  font-family: "Pretendard-Regular";
`;

const ErrorMessageStyle = styled.span`
  color: red;
  font-size: 0.9rem;
`;
