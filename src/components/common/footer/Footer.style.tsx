import styled from "styled-components";
import { DEVISE_SIZE } from "../../../const/devise";

export const FooterContainerStyle = styled.footer`
  width: 100%;
  border: 1px solid black;
  /* background-color: #ecf2ea; */
`;

export const FooterInnerContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    flex-direction: column;
  }
`;

export const FooterLeftBoxStyle = styled.div`
  display: flex;
  flex: 1;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    display: inline-block;
  }
`;

export const FooterRightBoxStyle = styled.div`
  display: flex;
`;

export const FooterSymbolBoxStyle = styled.div`
  padding: 1rem;
`;

export const FooterInfoListStyle = styled.ul`
  display: flex;
  font-size: 13px;
`;

export const FooterInfoItemStyle = styled.li`
  padding: 1rem;
`;
