import { Link } from "react-router-dom";
import KakaoButton from "../common/button/KakaoButton";

// 여기는 카카오 로그인 버튼 컴포넌트

const KakaoLogin = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_KEY;
  const REDIRECT_URL = "http://localhost:3000/kakaoCallback";
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  //   const handleLogin = () => {
  //     window.location.href = KAKAO_URL;
  //   };

  return (
    <Link to={KAKAO_URL}>
      <KakaoButton>카카오톡 계정 로그인</KakaoButton>
    </Link>
  );
};

export default KakaoLogin;
