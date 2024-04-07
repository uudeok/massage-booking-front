import { useEffect, useCallback } from 'react';
import LoadingBar from '../common/loading/LoadingBar';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useGetTokenMutation } from '../../api/auth/authQuery';

//  여기서 카카오로부터 받은 인가 코드를 백엔드로 전달하고
// 백엔드로부터 받은 토큰을 로컬스토리지에 저장하고 로그인을 유지한다.

const KakaoCallback = () => {
	const navigate = useNavigate();
	const [getToken, { error: loginError }] = useGetTokenMutation();

	const getTokenHandler = useCallback(async () => {
		const code = new URL(window.location.href).searchParams.get('code');

		try {
			const userInfo = await getToken(code!).unwrap();

			localStorage.setItem('nickname', userInfo.nickname);
			localStorage.setItem('token', userInfo.accessToken);
			localStorage.setItem('user', JSON.stringify(userInfo));
		} catch (error) {
			if (loginError && 'message' in loginError) {
				alert(loginError.message);
			}
		} finally {
			navigate('/');
		}
	}, [getToken, navigate, loginError]);

	useEffect(() => {
		getTokenHandler();
	}, [getTokenHandler]);

	return (
		<BackGroundStyle>
			<LayoutStyle>
				<LoginStyle>로그인중..</LoginStyle>
				<LoadingBar />
			</LayoutStyle>
		</BackGroundStyle>
	);
};

export default KakaoCallback;

const BackGroundStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 20;
	background-color: #d9ead3;
	opacity: 0.8;
	display: flex;
	justify-content: center;
`;

const LoginStyle = styled.h2`
	font-family: ${(props) => props.theme.fonts.gmarket};
	color: ${(props) => props.theme.palette.greenDk};
	font-size: 27px;
`;

const LayoutStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
