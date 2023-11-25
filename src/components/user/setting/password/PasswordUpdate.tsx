import styled from "styled-components";
import { MEDIA_QUERY } from "../../../../const/devise";
import PasswordUpdateForm from "./PasswordUpdateForm";

const PasswordUpdate = () => {
  return (
    <ContainerStyle>
      <LayoutStyle>
        <HeaderStyle>비밀번호 변경</HeaderStyle>
        <PasswordUpdateForm />
      </LayoutStyle>
    </ContainerStyle>
  );
};

export default PasswordUpdate;

const ContainerStyle = styled.div`
  width: 100%;
`;

const HeaderStyle = styled.h2`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
`;

const LayoutStyle = styled.div`
  box-shadow: 0 0 0.3rem 0 rgba(0, 0, 0, 0.2);
  width: 30rem;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 10px;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 70%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    width: 90%;
  }
`;
