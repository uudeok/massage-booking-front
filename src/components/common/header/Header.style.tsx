import styled from "styled-components";
import { DEVISE_SIZE } from "../../../const/devise";

export const HeaderContainerStyle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  font-family: "Pretendard-Regular";
`;

export const HeaderInnerContainerStyle = styled.header`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: end;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 80%;
  }
`;

export const HeaderLogoBoxStyle = styled.div`
  width: 20%;
  font-size: 30px;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 60%;
    font-size: 27px;
  }
`;

export const HeaderMenuBoxStyle = styled.div`
  width: 60%;
`;

export const HeaderMenuInnerBoxStyle = styled.div`
  width: 80%;
  margin: auto;
  display: flex;

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMax}) {
    display: none;
  }
`;

export const HeaderMenuListStyle = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const HeaderLoginBoxStyle = styled.div`
  width: 20%;
  text-align: right;
`;
