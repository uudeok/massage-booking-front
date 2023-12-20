import { TMassageDetail, TMassageTable } from "../../@types/massage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { setSelectedMassageType } from "../../stores/massageSlice";
import { addTabNum } from "../../stores/tabSlice";
import { addComma } from "../../util/price";
import CardImage from "../common/card/CardImage";
import CardContent from "../common/card/CardContent";
import CardButton from "../common/card/CardButton";

type TProps = {
  detail: TMassageDetail;
  massage: TMassageTable;
};

const BookingDetail = ({ detail, massage }: TProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const setAvailableTime = (time: number) => {
    dispatch(setSelectedMassageType(time));
    dispatch(addTabNum());
  };

  return (
    <>
      <CardImage image={massage.image} alt={massage.displayItem} />
      <CardContent
        title={massage.displayItem}
        subTitle={`(${detail.time}분)`}
        content={addComma(detail.price)}
        fontSize="1.2rem"
        textAlign="left"
      />
      <CardButton
        text="예약하기"
        onClickButton={setAvailableTime}
        argument={detail.time}
      />
    </>
  );
};

export default BookingDetail;
