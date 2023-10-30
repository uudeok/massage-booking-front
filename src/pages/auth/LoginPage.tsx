import LoginForm from "../../components/auth/Login";
import Layout from "../../layout/Layout";
import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";

const LoginPage = () => {
  return (
    <Layout>
      <LoginLayoutStyle>
        <LoginForm />
      </LoginLayoutStyle>
    </Layout>
  );
};

export default LoginPage;

const LoginLayoutStyle = styled.main`
  width: 30rem;
  margin: 5rem auto;
  padding: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 24rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    width: 20rem;
  }
`;
