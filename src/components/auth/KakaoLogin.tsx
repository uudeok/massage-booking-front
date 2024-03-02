import CommonButton from "../common/button/CommonButton";

const Rest_api_key = `${process.env.REACT_APP_KAKAO_REST_KEY}`;
const redirect_uri = `${process.env.REACT_APP_API_URL}/auth/kakao/callback`;

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

const KakaoLogin = () => {
  const handleLogin = async () => {
    window.location.href = kakaoURL;
  };

  return (
    <CommonButton onClickButton={handleLogin} $oauth="kakao">
      카카오톡 계정 로그인
    </CommonButton>
  );
};

export default KakaoLogin;
