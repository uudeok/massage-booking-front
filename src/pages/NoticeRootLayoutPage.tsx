import { Outlet } from "react-router-dom";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import styled from "styled-components";

const NoticeRootLayoutPage = () => {
  return (
    <WrapperStyle>
      <Header />
      <main style={{ flex: "1" }}>
        <Outlet />
      </main>
      <Footer />
    </WrapperStyle>
  );
};

export default NoticeRootLayoutPage;

const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
