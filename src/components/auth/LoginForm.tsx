import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { useInput } from "../../hooks/useInput";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import DefaultButton from "../common/button/DefaultButton";
import KakaoButton from "../common/button/KakaoButton";
import { closeModal } from "../../stores/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTimeDetail } from "../../stores/timeSlice";

const LoginForm = ({ path }: { path?: string }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedTime = useSelector(getTimeDetail);

  const [error, setError] = useState("");
  const { inputValue, changeInputHandler } = useInput({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const isValidEmail = email.includes("@") && email.trim().length > 5;
  const isValidPassword = password.trim().length >= 7;

  const validLoginForm = () => {
    if (!isValidEmail || !isValidPassword) {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      return false;
    }
    return true;
  };

  // const changeBookHandler = async () => {
  //   try {
  //     selectedTime.map((time) =>
  //       updateTime({ id: time.id, body: { ...time, type: "BOOK" } })
  //     );
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const onLoginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validLoginForm()) return;

    /// 로그인 API 요청
    localStorage.setItem("email", email);

    dispatch(closeModal());

    if (path) {
      // path 가 있다는 건, 예약 화면에서 넘어왔다는 뜻이니까
      // 예약 확정 API를 여기다 넣어야함

      navigate(`/${path}`);
    } else {
      navigate("/");
    }
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
        />
        <LabelStyle htmlFor="password">비밀번호</LabelStyle>
        <InputStyle
          type="password"
          required
          placeholder="비밀번호를 입력해주세요"
          id="password"
          name="password"
        />
        {error && <ErrorMessageStyle>{error}</ErrorMessageStyle>}

        <DefaultButton backgroundColor="#afc9a4" color="white">
          로그인
        </DefaultButton>
      </FormStyle>
      <BottomBoxStyle>
        <BottomTitleStyle>다른 계정으로 로그인</BottomTitleStyle>
        <KakaoButton>카카오톡 로그인</KakaoButton>
        <DefaultButton>
          <Link to="/join">회원가입 하러가기</Link>
        </DefaultButton>
      </BottomBoxStyle>
    </>
  );
};

export default LoginForm;

const FormStyle = styled.form`
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
  font-weight: bold;
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

const BottomBoxStyle = styled.div`
  margin-top: 2rem;
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
  color: rgba(0, 0, 0, 0.35);
  display: flex;
  flex-basis: 100%;
  align-items: center;
  font-family: "Pretendard-Regular";
  font-size: 1rem;
  margin-top: 1rem;

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 0.5px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

const ErrorMessageStyle = styled.span`
  color: red;
  font-size: 0.9rem;
`;
