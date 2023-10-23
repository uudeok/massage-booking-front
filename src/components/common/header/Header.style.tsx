import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";

export const ContainerStyle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  font-family: "Pretendard-Regular";
`;

export const InnerContainerStyle = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: end;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 95%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
  }
`;

export const LogoBoxStyle = styled.div`
  width: 20%;
  font-size: 1.8rem;
  font-family: "GmarketSansMedium";

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 1.5rem;
    width: 100%;
    margin-left: 0.5rem;
  }
`;

export const MenuBoxStyle = styled.div`
  width: 60%;
  /* border: 1px solid black; */

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    display: none;
  }
`;

export const MenuListStyle = styled.ul`
  display: flex;
  width: 60%;
  margin: auto;
  justify-content: space-around;
  font-size: 1.2rem;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    font-size: 1rem;
    width: 80%;
  }
`;

export const LoginBoxStyle = styled.div`
  width: 20%;
  text-align: right;
  font-family: "GmarketSansMedium";

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
  }
`;

export const LogoutBoxStyle = styled.div`
  button {
    margin-left: 1rem;
    border: none;
    background-color: white;
    font-family: "Pretendard-Regular";
    font-size: 1rem;
    cursor: pointer;

    @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
      font-size: 0.8rem;
    }

    @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
      font-size: 0.9rem;
    }
  }
`;
