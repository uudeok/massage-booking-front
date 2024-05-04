import Button from '../common/UI/button/Button';

const Rest_api_key = '82b2a273bbfaafd6f3e16a629f61341b';
const redirect_uri = 'https://www.naturalhealingspa.xyz/auth/kakao/callback';
// const Rest_api_key = `${process.env.REACT_APP_KAKAO_REST_KEY}`;
// const redirect_uri = `${process.env.REACT_APP_KAKAO_API_URL}/auth/kakao/callback`;

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

const KakaoLogin = () => {
	const handleLogin = () => {
		window.location.href = kakaoURL;
	};

	return (
		<Button role="kakao" size="lg" onClick={handleLogin}>
			카카오톡 계정 로그인
		</Button>
	);
};

export default KakaoLogin;
