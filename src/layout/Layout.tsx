import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <MainLayoutStyled>{children}</MainLayoutStyled>
      <Footer />
    </>
  );
};

export default Layout;

const MainLayoutStyled = styled.main`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
