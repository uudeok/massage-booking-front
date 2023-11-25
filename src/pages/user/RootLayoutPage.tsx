import { Outlet } from "react-router-dom";
import { MEDIA_QUERY } from "../../const/devise";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MyPageSide from "../../components/user/layout/MyPageSide";
import MyPageHeader from "../../components/user/layout/MyPageHeader";

const RootLayoutPage = () => {
  return (
    <WrapperStyle>
      <Header />
      <MyPageHeader />
      <MainStyle>
        <MyPageSide />
        <Outlet />
      </MainStyle>
      <Footer />
    </WrapperStyle>
  );
};

export default RootLayoutPage;

const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const MainStyle = styled.main`
  flex: 1;
  width: 70%;
  margin: 3rem auto;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: ${MEDIA_QUERY.bigNotebookWidth}) {
    width: 80%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    flex-direction: column;
  }
`;
