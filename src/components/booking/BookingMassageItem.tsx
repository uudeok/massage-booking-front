import { BOOKING_ITEM_KEYS, TMassageTable } from "../../@types/massage";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { setSelectedMassageItem } from "../../stores/massageSlice";
import { addTabNum } from "../../stores/tabSlice";
import DefaultButton from "../common/button/DefaultButton";

type TProps = {
  massage: TMassageTable;
};

const BookingMassageItem = ({ massage }: TProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const selectMassageItem = (massageItem: BOOKING_ITEM_KEYS) => {
    dispatch(setSelectedMassageItem(massageItem));
    dispatch(addTabNum());
  };

  return (
    <ItemBoxStyle>
      <ImgBoxStyle>
        <img
          src={massage.image}
          alt={massage.displayItem}
          width="100%"
          height="100%"
        />
      </ImgBoxStyle>
      <ItemContentBoxStyle>
        <h3>{massage.displayItem}</h3>
        <span>{massage.content}</span>
        <DefaultButton
          onClick={() => selectMassageItem(massage.item)}
          backgroundColor="#afc9a4"
          color="white"
        >
          예약하기
        </DefaultButton>
      </ItemContentBoxStyle>
    </ItemBoxStyle>
  );
};

export default BookingMassageItem;

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
