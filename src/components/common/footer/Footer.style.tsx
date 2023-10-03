import styled from "styled-components";
import { DEVISE_SIZE } from "../../../const/devise";

export const FooterContainerStyle = styled.footer`
  width: 100%;
  border: 1px solid black;
`;

export const FooterInnerContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMin}) {
    flex-direction: column;
  }
`;

export const FooterLeftBoxStyle = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const FooterRightBoxStyle = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterLogoItemStyle = styled.span`
  padding: 1rem;
`;
