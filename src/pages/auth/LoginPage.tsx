import Layout from '../../layout/Layout';
import styled from 'styled-components';
import OauthLogin from '../../components/Auth/OauthLogin';

const LoginPage = () => {
	return (
		<Layout>
			<LoginLayoutStyle>
				<OauthLogin />
			</LoginLayoutStyle>
		</Layout>
	);
};

export default LoginPage;

const LoginLayoutStyle = styled.main`
	width: 30rem;
	margin: 5rem auto;
	padding: 1rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		width: 24rem;
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.bigMobileWidth}) {
		width: 20rem;
	}
`;
