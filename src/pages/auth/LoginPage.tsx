import LoginForm from "../../components/auth/Login";
import Layout from "../../layout/Layout";
import styled from "styled-components";

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
`;
