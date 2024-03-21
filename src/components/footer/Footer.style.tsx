import styled from "styled-components";
import theme from "../../styles/theme";

export const FooterContainerStyle = styled.div`
  display: flex;
  width: 100%;
  min-height: 70px;
  color: white;
  background-color: #313131;
`;

export const FooterInnerContainerStyle = styled.footer`
  margin: auto;

  @media only screen and (max-width: ${theme.devise.notebookWidth}) {
    flex-direction: column;
  }
`;

export const FooterTopBoxStyle = styled.div`
  display: flex;
  flex: 1;

  @media only screen and (max-width: ${theme.devise.notebookWidth}) {
    flex-direction: column;
  }
`;

export const FooterSymbolBoxStyle = styled.div`
  padding: 1rem;
`;

export const FooterInfoListStyle = styled.ul`
  display: flex;
  font-size: 13px;

  @media only screen and (max-width: ${theme.devise.notebookWidth}) {
    flex-wrap: wrap;
  }
`;

export const FooterInfoItemStyle = styled.li`
  padding: 1rem;

  @media only screen and (max-width: ${theme.devise.notebookWidth}) {
    padding: 0.3rem;
  }
`;
