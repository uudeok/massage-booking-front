import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";

export const ContainerStyle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  font-family: "Pretendard-Regular";
  /* font-weight: bold; */
  align-items: end;
  /* margin-bottom: 0.5rem; */
  padding: 0.5rem;
  background-color: whitesmoke;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    height: 30px;
  }
`;

export const InnerContainerStyle = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: end;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 95%;
  }
`;

export const LogoBoxStyle = styled.div`
  width: 20%;
  display: flex;

  img {
    padding: 0.2rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    margin-left: 0.3rem;
  }
`;

export const LogoStyle = styled.h1`
  font-size: 2rem;
  font-family: "GmarketSansMedium";
  height: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 1.3rem;
    width: 100%;
  }
`;

export const MenuBoxStyle = styled.div`
  width: 60%;

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

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
  }
`;

export const LogoutBoxStyle = styled.div`
  button {
    margin-left: 0.5rem;
    border: none;
    background-color: whitesmoke;
    font-family: "Pretendard-Regular";
    font-size: 1rem;
    cursor: pointer;
    color: black;

    @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
      font-size: 0.8rem;
    }

    @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
      font-size: 0.9rem;
    }
  }
`;

export const MenuBarStyle = styled.div`
  text-align: right;
  border: 1px solid black;

  @media only screen and (min-width: ${MEDIA_QUERY.tabletWidth}) {
    display: none;
  }
`;

export const InnerBoxStyle = styled.div`
  display: flex;
  border: 1px solid black;
  width: 100%;
`;
