import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { BOOKING_MASSAGE_TABLE, BOOKING_ITEM } from "../../const/massage";
import { MEDIA_QUERY } from "../../const/devise";

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
      {BOOKING_MASSAGE_TABLE.map((massage) => (
        <SwiperSlide key={massage.id}>
          <Link to="/program">
            <ContainerStyle>
              <img
                src={massage.img}
                alt={massage.content}
                width="100%"
                height="100%"
              />
              <ItemContentStyle>{BOOKING_ITEM[massage.item]}</ItemContentStyle>
            </ContainerStyle>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MassageSlide;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  height: 40vh;
  justify-content: center;
  padding: 1rem;

  &:hover {
    scale: calc(1.02);
  }

  img {
    height: 80%;
    opacity: 0.9;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.mobileWidth}) {
    height: 30vh;
  }
`;

const ItemContentStyle = styled.div`
  height: 20%;
  padding: 1rem;
  font-family: "Pretendard-Regular";
  font-size: 20px;
`;
