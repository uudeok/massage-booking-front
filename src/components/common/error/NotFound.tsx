import { useRouteError, Link } from 'react-router-dom';
import styled from 'styled-components';

type TError = {
	status: number;
	data: {
		error: string;
	};
};

const NotFound = () => {
	const error = useRouteError() as TError;
	console.log('Not Found', error);

	return (
		<ErrorScreen>
			<MessageStyle>존재하지 않는 페이지입니다</MessageStyle>
			<Link to="/">
				<ButtonStyle>홈으로</ButtonStyle>
			</Link>
		</ErrorScreen>
	);
};

export default NotFound;

const ErrorScreen = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 1rem;
	font-family: ${(props) => props.theme.fonts.pretend};
	gap: 2rem;
	margin: 5rem auto;
`;

const MessageStyle = styled.h2`
	font-weight: bold;
	font-size: 3rem;
`;

const ButtonStyle = styled.button`
	width: 15rem;
	padding: 1rem;
	font-size: 1rem;
	border: 1px solid grey;
	border-radius: 50px;
	background-color: transparent;
	cursor: pointer;
`;
