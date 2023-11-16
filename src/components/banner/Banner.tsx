import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";

interface IProps {
  img: string;
  children: React.ReactNode;
}

const Banner = ({ img, children }: IProps) => {
  return (
    <ImgBoxStyle>
      <img src={`/${img}`} alt="배너사진" width="100%" height="100%" />
      <BannerBoxStyle>{children}</BannerBoxStyle>
    </ImgBoxStyle>
  );
};

export default Banner;

const ImgBoxStyle = styled.div`
  width: 100%;
  height: 450px;

  img {
    object-fit: cover;
    opacity: 0.8;
    filter: brightness(0.8);
    z-index: 0;
  }
`;

const BannerBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Pretendard-Regular";
  color: white;
  width: 25rem;
  position: relative;
  left: 60%;
  bottom: 21rem;
  padding: 1rem;
  font-size: 1.2rem;

  span {
    padding: 0.3rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    font-size: 0.9rem;
    left: 43%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.mobileWidth}) {
    font-size: 0.8rem;
    left: 40%;
  }
`;
