import styled from "styled-components";
import { DEVISE_SIZE } from "../../const/devise";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <BookingContainerStyle>
      <BookingInnerBoxStyle>
        <BookingClickBoxStyle>오시는 길</BookingClickBoxStyle>
        <Link to="/book">
          <BookingClickBoxStyle>예약하기</BookingClickBoxStyle>
        </Link>
      </BookingInnerBoxStyle>
    </BookingContainerStyle>
  );
};

export default Booking;

const BookingContainerStyle = styled.div`
  width: 100%;
  min-height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("h.jpg"); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  opacity: 0.8;

  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    width: 100%;
    min-height: 40vh;
  }

  @media only screen and (max-width: ${DEVISE_SIZE.tabletMax}) {
    width: 100%;
    min-height: 30vh;
  }
`;

const BookingInnerBoxStyle = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;

  a {
    color: black;
  }
`;

const BookingClickBoxStyle = styled.div`
  width: 17rem;
  height: 3.5rem;
  font-size: 2rem;
  border-radius: 50px;
  text-align: center;
  margin-right: 3.3rem;
  font-weight: bold;
  color: white;
  background-color: #7e8d4f;
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
    width: 9rem;
    font-size: 1rem;
    margin-right: 2rem;
    height: 3rem;
  }
`;
