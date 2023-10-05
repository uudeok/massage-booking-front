import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Autoplay } from "swiper/modules";
import { MASSAGE_LIST } from "../../const/massage";

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
        <SwiperSlide key={item.content}>
          <MassageItemContainerStyle>
            <img src={`${item.img}`} alt={item.content} />
            <MassageItemContentStyle>{item.content}</MassageItemContentStyle>
          </MassageItemContainerStyle>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MassageSlide;

const MassageItemContainerStyle = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;

  :hover {
    scale: calc(1.02);
  }
`;

const MassageItemContentStyle = styled.div`
  padding: 1rem;
`;
