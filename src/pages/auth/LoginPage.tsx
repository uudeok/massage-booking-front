import LoginForm from "../../components/auth/Login";
import Layout from "../../layout/Layout";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <Layout>
      <LoginBoxStyle>
        <LoginForm />
      </LoginBoxStyle>
    </Layout>
  );
};

export default LoginPage;

const LoginBoxStyle = styled.div`
  width: 40rem;
  margin: 5rem auto;
  padding: 1rem;
`;
