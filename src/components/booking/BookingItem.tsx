import { TMassageTable } from "../../@types/book";
import styled from "styled-components";
import { BOOKING_ITEM } from "../../const/massage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { fetchMassageItem } from "../../stores/massageSlice";
import { addTabNum } from "../../stores/tabSlice";

type TProps = {
  massage: TMassageTable;
};

const BookingItem = ({ massage }: TProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const getMassageItem = async (massageId: number) => {
    await dispatch(fetchMassageItem(massageId));
    dispatch(addTabNum());
  };

  return (
    <ItemBoxStyle>
      <ImgBoxStyle>
        <img src={massage.img} alt={massage.item} width="100%" height="100%" />
      </ImgBoxStyle>
      <ItemContentBoxStyle>
        <h3>{BOOKING_ITEM[massage.item]}</h3>
        <span>{massage.content}</span>
        <ButtonStyle onClick={() => getMassageItem(massage.id)}>
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
`;

const ItemContentBoxStyle = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  padding: 1rem;

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
  background-color: white;
  padding: 0.7rem;
  cursor: pointer;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  font-family: "Pretendard-Regular";
  font-size: 1rem;
  height: 3rem;

  /* &:hover {
    background-color: #afc9a4;
    color: white;
    border: none;
    transition: all 0.326s ease-in-out;
  } */
`;
