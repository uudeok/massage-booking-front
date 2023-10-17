import { IBookingItem } from "../../@types/book";
import styled from "styled-components";
import { BOOKING_ITEM } from "../../const/book";
import { useDispatch } from "react-redux";
import { getMassageDetail } from "../../stores/massageSlice";
import { DEVISE_SIZE } from "../../const/devise";

const BookingItem = ({ massage, changeTabHandler, tabNum }: IBookingItem) => {
  const dispatch = useDispatch();

  const fetchDetailTime = async (id: number) => {
    /// 마사지를 선택하면 id 로 api 호출, 마사지 디테일 및 정보가 응답으로 온다.
    // 그러고나서 props 로 받은 함수 호출해서 tab 이동

    await dispatch(getMassageDetail(id));
    changeTabHandler(tabNum + 1);
  };

  return (
    <ItemBoxStyle>
      <ImgBoxStyle>
        <img src={massage.img} alt={massage.item} width="100%" height="100%" />
      </ImgBoxStyle>
      <ItemContentBoxStyle>
        <h3>{BOOKING_ITEM[massage.item]}</h3>
        <span>{massage.content}</span>
        <ButtonStyle onClick={() => fetchDetailTime(massage.id)}>
          예약하기
        </ButtonStyle>
      </ItemContentBoxStyle>
    </ItemBoxStyle>
  );
};

export default BookingItem;

const ItemBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ImgBoxStyle = styled.div`
  height: 70%;

  /* @media only screen and (max-width: ${DEVISE_SIZE.notebookMax}) {
    height: 80%;
  } */
`;

const ItemContentBoxStyle = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  span {
    flex: 1;
    padding: 0.5rem;
    font-size: 15px;
  }
`;

const ButtonStyle = styled.button`
  background-color: #9ac488;
  padding: 0.7rem;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #8ab278;
    color: white;
    border: none;
  }
`;
