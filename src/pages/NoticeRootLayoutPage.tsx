import { Outlet } from "react-router-dom";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import styled from "styled-components";

const NoticeRootLayoutPage = () => {
  return (
    <WrapperStyle>
      <Header />
      <MainStyle>
        <hr style={{ border: "1px solid lightgrey" }}></hr>
        <Outlet />
      </MainStyle>
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

const MainStyle = styled.main`
  flex: 1;
`;
