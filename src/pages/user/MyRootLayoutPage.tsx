import { Outlet } from "react-router-dom";
import { MEDIA_QUERY } from "../../const/devise";
import styled from "styled-components";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import MyPageSide from "../../components/user/MyPageSide";
import MyPageHeader from "../../components/user/MyPageHeader";

const MyRootLayoutPage = () => {
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

export default MyRootLayoutPage;

const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const MainStyle = styled.main`
  flex: 1;
  width: 80%;
  margin: 3rem auto;
  display: flex;
  flex-direction: row;
  /* border: 1px solid black; */

  @media only screen and (max-width: ${MEDIA_QUERY.bigNotebookWidth}) {
    width: 80%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }
`;
