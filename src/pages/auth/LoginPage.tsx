import Layout from "../../layout/Layout";
import styled from "styled-components";
import OauthLogin from "../../components/auth/OauthLogin";
import theme from "../../styles/theme";

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

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    width: 24rem;
  }

  @media only screen and (max-width: ${theme.devise.bigMobileWidth}) {
    width: 20rem;
  }
`;
