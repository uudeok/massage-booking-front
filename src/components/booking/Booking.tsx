import styled from "styled-components";
import { DEVISE_SIZE } from "../../const/devise";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <ContainerStyle>
      <InnerBoxStyle>
        <Link to="/information/contact">
          <ButtonBoxStyle>오시는 길</ButtonBoxStyle>
        </Link>
        <Link to="/book">
          <ButtonBoxStyle>예약하기</ButtonBoxStyle>
        </Link>
      </InnerBoxStyle>
    </ContainerStyle>
  );
};

export default Booking;

const ContainerStyle = styled.div`
  width: 100%;
  min-height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 100%;
    min-height: 40vh;
  }

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMax}) {
    width: 100%;
    min-height: 30vh;
  }
`;

const InnerBoxStyle = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;

  a {
    color: black;
  }

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 100%;
  }
`;

const ButtonBoxStyle = styled.div`
  width: 17rem;
  height: 3.5rem;
  font-size: 2rem;
  border-radius: 50px;
  text-align: center;
  margin-right: 3.3rem;
  font-weight: bold;
  color: white;
  background-color: #97a393;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "KBO-Dia-Gothic_bold";

  &:hover {
    background-color: #819977;
  }

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 13rem;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMax}) {
    width: 11rem;
    font-size: 1rem;
  }

  @media only screen and (max-width: ${DEVISE_SIZE.mobileWidthMax}) {
    width: 8rem;
    font-size: 1rem;
    margin-right: 2rem;
    height: 3rem;
  }
`;
