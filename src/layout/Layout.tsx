import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
      <Header />
      <MainLayoutStyle>{children}</MainLayoutStyle>
      <Footer />
    </div>
  );
};

export default Layout;

const MainLayoutStyle = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
