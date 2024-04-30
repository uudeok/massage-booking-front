import Footer from '../components/Layout/footer/Footer';
import Header from '../components/Layout/header/Header';
import styled from 'styled-components';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<WrapperStyle>
			<Header />
			<MainStyle>{children}</MainStyle>
			<Footer />
		</WrapperStyle>
	);
};

export default Layout;

const WrapperStyle = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const MainStyle = styled.main`
	flex: 1;
`;
