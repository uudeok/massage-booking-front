import { Outlet } from 'react-router-dom';
import Header from '../../components/Layout/header/Header';
import Footer from '../../components/Layout/footer/Footer';
import styled from 'styled-components';

const NoticeRootLayoutPage = () => {
	return (
		<WrapperStyle>
			<Header />
			<MainStyle>
				<Outlet />
			</MainStyle>
			<Footer />
		</WrapperStyle>
	);
};

export default NoticeRootLayoutPage;

const WrapperStyle = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
`;

const MainStyle = styled.main`
	flex: 1;
`;
