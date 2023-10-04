import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MASSAGE_LIST = [
  { img: "noimg.gif", content: "마사지 입니다1" },
  { img: "noimg.gif", content: "마사지 입니다2" },
  { img: "noimg.gif", content: "마사지 입니다3" },
  { img: "noimg.gif", content: "마사지 입니다4" },
  { img: "noimg.gif", content: "마사지 입니다5" },
];

const MassageList = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      navigation
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

export default MassageList;

const MassageItemContainerStyle = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const MassageItemContentStyle = styled.div`
  margin-top: 1rem;
`;
