import { BOOKING_ITEM_KEYS, TMassageTable } from "../../@types/massage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { setSelectedMassageItem } from "../../stores/massageSlice";
import { addTabNum } from "../../stores/tabSlice";
import CardImage from "../common/card/CardImage";
import CardContent from "../common/card/CardContent";
import { palette } from "../../styles/palette";
import CommonButton from "../common/button/CommonButton";

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
    <>
      <CardImage image={massage.image} alt={massage.displayItem} />
      <CardContent title={massage.displayItem} content={massage.content} />
      <CommonButton
        type="round"
        onClickButton={() => selectMassageItem(massage.item)}
        padding="0.7rem"
        border={`2px solid ${palette.grey}`}
        hoverColor={palette.grey}
      >
        선택하기
      </CommonButton>
    </>
  );
};

export default BookingMassageItem;
