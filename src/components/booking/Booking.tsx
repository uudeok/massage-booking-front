import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <ContainerStyle>
      <ImgBoxStyle>
        <img src="/green.jpg" alt="메인사진" width="100%" height="100%" />
        <InnerBoxStyle>
          <Link to="/information/contact">
            <ButtonBoxStyle>오시는 길</ButtonBoxStyle>
          </Link>
          <Link to="/book">
            <ButtonBoxStyle>예약하기</ButtonBoxStyle>
          </Link>
        </InnerBoxStyle>
      </ImgBoxStyle>
    </ContainerStyle>
  );
};

export default Booking;

const ContainerStyle = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
    height: 30vh;
  }
`;

const ImgBoxStyle = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  font-family: "Pretendard-Regular";

  img {
    object-fit: cover;
    opacity: 0.8;
    filter: brightness(0.8);
    z-index: 0;
  }
`;

const InnerBoxStyle = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 60%;

  a {
    color: black;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
  }
`;

const ButtonBoxStyle = styled.div`
  width: 17rem;
  height: 3.5rem;
  font-size: 2rem;
  border-radius: 50px;
  text-align: center;
  margin-right: 3.2rem;
  color: white;
  background-color: #97a393;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "KBO-Dia-Gothic_bold";

  &:hover {
    background-color: #819977;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigNotebookWidth}) {
    width: 13rem;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 11rem;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 9rem;
    font-size: 1rem;
    margin-right: 0.8rem;
    height: 3rem;
  }
`;
