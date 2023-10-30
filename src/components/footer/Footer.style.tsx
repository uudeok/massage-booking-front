import styled from "styled-components";
import { DEVISE_SIZE } from "../../const/devise";

export const FooterContainerStyle = styled.div`
  display: flex;
  width: 100%;
  min-height: 60px;
  color: white;
  background-color: #313131;
`;

export const FooterInnerContainerStyle = styled.footer`
  margin: auto;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    flex-direction: column;
  }
`;

export const FooterLeftBoxStyle = styled.div`
  display: flex;
  flex: 1;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    flex-direction: column;
  }
`;

export const FooterSymbolBoxStyle = styled.div`
  padding: 1rem;
`;

export const FooterInfoListStyle = styled.ul`
  display: flex;
  font-size: 13px;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    flex-wrap: wrap;
  }
`;

export const FooterInfoItemStyle = styled.li`
  padding: 1rem;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    padding: 0.3rem;
  }
`;
