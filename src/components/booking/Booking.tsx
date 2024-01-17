import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";
import { getAuthUser } from "../../util/auth";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const token = getAuthUser();

  const handleRedirect = () => {
    if (token === null) {
      navigate("/login");
    } else {
      navigate("/book");
    }
  };

  return (
    <ContainerStyle>
      <ImgBoxStyle>
        <img src="/5.jpg" alt="메인사진" width="100%" height="100%" />
        <InnerBoxStyle>
          <Link to="/information/contact">
            <ButtonBoxStyle>오시는 길</ButtonBoxStyle>
          </Link>

          <ButtonBoxStyle onClick={handleRedirect}>예약하기</ButtonBoxStyle>
        </InnerBoxStyle>
      </ImgBoxStyle>
    </ContainerStyle>
  );
};

export default Booking;

const ContainerStyle = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: ${theme.devise.notebookWidth}) {
    height: 35vh;
  }
`;

const ImgBoxStyle = styled.div`
  width: 100%;
  height: 100%;
  font-family: ${theme.fonts.pretend};

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
  gap: 2rem;

  a {
    color: black;
  }

  @media only screen and (max-width: ${theme.devise.notebookWidth}) {
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
  background-color: ${theme.palette.greenDk};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.KBO};

  &:hover {
    background-color: ${theme.palette.greenLg};
  }

  @media only screen and (max-width: ${theme.devise.bigNotebookWidth}) {
    width: 13rem;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${theme.devise.notebookWidth}) {
    width: 11rem;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    width: 9rem;
    font-size: 1rem;
    margin-right: 0.8rem;
    height: 3rem;
  }
`;
