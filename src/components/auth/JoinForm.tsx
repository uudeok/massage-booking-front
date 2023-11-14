import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { useInput } from "../../hooks/useInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../common/button/DefaultButton";
import KakaoButton from "../common/button/KakaoButton";
import { useDispatch } from "react-redux";
import { openModal } from "../../stores/modalSlice";

const JoinForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { inputValue, changeInputHandler } = useInput({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { email, password, passwordConfirm } = inputValue;

  const isValidEmail = email.includes("@") && email.trim().length > 5;
  const isValidPassword = password.trim().length >= 7;
  const isSamePassword = password === passwordConfirm;

  const changeCheckBoxHandler = () => {
    setIsChecked((prev) => !prev);
  };

  const validJoinForm = () => {
    if (!isValidEmail) {
      setError(
        "올바른 이메일 주소를 입력해주세요. 예약 내역이 이메일로 발송됩니다."
      );
      return false;
    }

    if (!isValidPassword) {
      setError("비밀번호는 7자리 이상입니다.");
      return false;
    }

    if (!isSamePassword) {
      setError("비밀번호가 동일하지 않습니다. ");
      return false;
    }
    if (!isChecked) {
      setError("개인정보동의란을 체크해주세요.");
      return false;
    }

    return true;
  };

  const onRegisterHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validJoinForm()) return;
    dispatch(
      openModal({
        type: "ConfirmModal",
        props: {
          icon: "🎉",
          content: "자연치유 쉼의 회원이 되신 걸 환영합니다.",
          confirm: "다시 로그인해주세요.",
        },
      })
    );
    navigate("/login");
  };

  return (
    <ContainerStyle>
      <HeaderStyle>회원가입</HeaderStyle>
      <FormStyle onChange={changeInputHandler} onSubmit={onRegisterHandler}>
        <LabelStyle htmlFor="email">이메일</LabelStyle>
        <InputStyle
          type="email"
          required
          id="email"
          name="email"
          placeholder="예약 내역이 이메일로 발송됩니다."
        />
        <LabelStyle htmlFor="password">비밀번호</LabelStyle>
        <InputStyle
          type="password"
          required
          id="password"
          name="password"
          placeholder="7자리 이상 입력해주세요."
        />
        <LabelStyle htmlFor="passwordConfirm">비밀번호 확인</LabelStyle>
        <InputStyle
          type="password"
          required
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="비밀번호를 한번 더 입력해주세요."
        />
        <PersonalConsentBoxStyle>
          <label htmlFor="agreement">개인정보동의</label>
          <input
            type="checkbox"
            required
            id="agreement"
            name="agreement"
            onClick={changeCheckBoxHandler}
          />
        </PersonalConsentBoxStyle>
        {error && <ErrorMessageStyle>{error}</ErrorMessageStyle>}
        <DefaultButton backgroundColor="#afc9a4" color="white">
          회원가입
        </DefaultButton>
        <KakaoButton>카카오톡 회원가입</KakaoButton>
      </FormStyle>
    </ContainerStyle>
  );
};

export default JoinForm;

const ContainerStyle = styled.div`
  width: 30rem;
  margin: 7rem auto;
  font-family: "Pretendard-Regular";

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 70%;
  }
`;

const HeaderStyle = styled.h2`
  font-size: 1.5rem;
  padding: 1rem;
  font-weight: bold;
`;

const FormStyle = styled.form`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 90%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    width: 100%;
  }
`;

const LabelStyle = styled.label`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const InputStyle = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const PersonalConsentBoxStyle = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 2rem;

  label {
    flex: 1;
    font-size: 1.2rem;
  }
`;

const ErrorMessageStyle = styled.span`
  color: red;
  font-size: 0.9rem;
`;
