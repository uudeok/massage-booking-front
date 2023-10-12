import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <MainLayoutStyle>{children}</MainLayoutStyle>
      <Footer />
    </>
  );
};

export default Layout;

const MainLayoutStyle = styled.main`
  display: flex;
  flex-direction: column;
`;
