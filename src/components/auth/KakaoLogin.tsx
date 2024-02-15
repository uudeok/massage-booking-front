import CommonButton from "../common/button/CommonButton";

const KAKAO_URL = `http://localhost:5000/auth/kakao`;

const KakaoLogin = () => {
  const handleLogin = async () => {
    try {
      window.location.href = KAKAO_URL;
    } catch (error) {
      console.error("카카오톡 로그인 에러:", error);
      throw new Error("카카오톡 로그인에 실패했습니다.");
    }
  };

  return (
    <CommonButton onClickButton={handleLogin} $oauth="kakao">
      카카오톡 계정 로그인
    </CommonButton>
  );
};

export default KakaoLogin;
