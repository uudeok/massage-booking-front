import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutWrapperStyle>
      <Header />
      <MainLayoutStyle>{children}</MainLayoutStyle>
      <Footer />
    </LayoutWrapperStyle>
  );
};

export default Layout;

const LayoutWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const MainLayoutStyle = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
