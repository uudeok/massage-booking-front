import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Autoplay } from "swiper/modules";
import { MASSAGE_LIST } from "../../const/massage";
import { DEVISE_SIZE } from "../../const/devise";

const MassageSlide = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        1279: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
      }}
    >
      {MASSAGE_LIST.map((item) => (
        <SlideStyle key={item.content}>
          <ContainerStyle>
            <img src={`${item.img}`} alt={item.content} />
            <ItemContentStyle>{item.content}</ItemContentStyle>
          </ContainerStyle>
        </SlideStyle>
      ))}
    </Swiper>
  );
};

export default MassageSlide;

const SlideStyle = styled(SwiperSlide)`
  @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    margin-top: 1rem;
  }
`;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  height: 100%;
  justify-content: center;

  :hover {
    scale: calc(1.02);
  }
`;

const ItemContentStyle = styled.div`
  padding: 1rem;
  font-family: "Pretendard-Regular";
  font-size: 20px;
`;
