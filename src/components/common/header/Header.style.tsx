import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";

export const ContainerStyle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  font-family: "Pretendard-Regular";
`;

export const InnerContainerStyle = styled.header`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: end;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }
`;

export const LogoBoxStyle = styled.div`
  width: 20%;
  font-size: 30px;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 27px;
    width: 100%;
  }
`;

export const MenuBoxStyle = styled.div`
  width: 60%;
`;

export const MenuInnerBoxStyle = styled.div`
  width: 80%;
  margin: auto;
  display: flex;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    display: none;
  }
`;

export const MenuListStyle = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-size: 1.3rem;
`;

export const LoginBoxStyle = styled.div`
  width: 20%;
  text-align: right;
`;
