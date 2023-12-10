import { BOOKING_ITEM_KEYS, TMassageTable } from "../../@types/massage";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { setSelectedMassageItem } from "../../stores/massageSlice";
import { addTabNum } from "../../stores/tabSlice";
import { palette } from "../../styles/palette";

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
        <ButtonStyle onClick={() => selectMassageItem(massage.item)}>
          예약하기
        </ButtonStyle>
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

  img {
    border-radius: 10px;
  }
`;

const ItemContentBoxStyle = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  align-items: center;

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
  background-color: ${palette.white};
  color: ${palette.black};
  border: 2px solid ${palette.grey};
  padding: 0.7rem;
  border-radius: 50px;
  cursor: pointer;
  width: 100%;

  &:hover {
    color: ${palette.grey};
  }
`;
