import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { MASSAGE_ITEM } from "../../const/book/massage";
import { TMassageTable } from "../../@types/massage";

const MassageSlide = ({ massageList }: { massageList: TMassageTable[] }) => {
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
      {massageList &&
        massageList.map((massage) => (
          <SwiperSlide key={massage.id}>
            <Link to="/program">
              <ContainerStyle>
                <ItemImgStyle>
                  <img
                    src={massage.image}
                    alt={massage.content}
                    width="100%"
                    height="100%"
                  />
                </ItemImgStyle>
                <ItemContentStyle>
                  {MASSAGE_ITEM[massage.item]}
                </ItemContentStyle>
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
  height: 100%;
  justify-content: center;
  border: 1px solid lightgrey;
  box-shadow: 0 0 0.5 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const ItemImgStyle = styled.div`
  img {
    opacity: 0.9;
    border-radius: 5px;
  }
`;

const ItemContentStyle = styled.div`
  padding: 1rem;
  font-family: "GmarketSansMedium";
  font-size: 1rem;
`;
