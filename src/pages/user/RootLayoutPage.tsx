import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MyPageSide from '../../components/User/layout/MyPageSide';
import MyPageHeader from '../../components/User/layout/MyPageHeader';
import { getUserName } from '../../util/auth';

const RootLayoutPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const name = getUserName();
		if (!name) {
			alert('로그인이 필요한 서비스입니다.');
			navigate('/login');
		}
	});

	return (
		<WrapperStyle>
			<Header />
			<MyPageHeader />
			<MainStyle>
				<MyPageSide />
				<Outlet />
			</MainStyle>
			<Footer />
		</WrapperStyle>
	);
};

export default RootLayoutPage;

const WrapperStyle = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
`;

const MainStyle = styled.main`
	flex: 1;
	width: 70%;
	margin: 3rem auto;
	display: flex;
	flex-direction: row;

	@media only screen and (max-width: ${(props) => props.theme.devise.bigNotebookWidth}) {
		width: 80%;
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.notebookWidth}) {
		width: 100%;
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		flex-direction: column;
	}
`;
