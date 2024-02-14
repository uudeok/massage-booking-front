import { Link } from "react-router-dom";
import CommonButton from "../common/button/CommonButton";

// 여기는 카카오 로그인 버튼 컴포넌트

const KakaoLogin = () => {
  const KAKAO_URL = `http://localhost:5000/auth/kakao`;

  return (
    <Link to={KAKAO_URL}>
      <CommonButton $oauth="kakao">카카오톡 계정 로그인</CommonButton>
    </Link>
  );
};

export default KakaoLogin;
