import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { addComma } from "../../util/price";
import { useDispatch, useSelector } from "react-redux";
import {
  getMassageDetail,
  getSelectedMassageItem,
} from "../../stores/massageSlice";
import { getAuthUser } from "../../util/auth";
import { openModal } from "../../stores/modalSlice";
import { usePostOrderDataMutation } from "../../api/orders/ordersQuery";
import dayjs from "dayjs";
import { DAY_OF_WEEK_NUMBER } from "../../const/book/time";
import { useNavigate } from "react-router-dom";

type TProps = {
  selectedDate: Date;
  startTime: string;
  endTime: string;
};

const BookingSummary = ({ startTime, endTime, selectedDate }: TProps) => {
  const getAuth = getAuthUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const massageItem = useSelector(getSelectedMassageItem);
  const massageDetail = useSelector(getMassageDetail);
  const selectedMassageTime = massageDetail[0].time;
  const selectedMassagePrice = massageDetail[0].price;
  const simpleDate = dayjs(selectedDate).format("YYYY-MM-DD");
  const fullStartDate = dayjs(selectedDate).format("YYYY-MM-DDTHH:mm:ss");
  const fullEndDate = dayjs(fullStartDate)
    .add(selectedMassageTime, "minutes")
    .format("YYYY-MM-DDTHH:mm:ss");
  const dayNum = dayjs(simpleDate).day();

  // console.log(startTime);
  // console.log(endTime);
  // console.log(simpleDate);

  const [postOrder] = usePostOrderDataMutation();

  const changeBookHandler = async () => {
    try {
      postOrder({
        order: {
          item: massageItem.displayItem,
          price: selectedMassagePrice,
          startReservedAt: fullStartDate,
          endReservedAt: fullEndDate,
        },
        event: {
          targetDate: simpleDate,
          startReservedTime: startTime,
          endReservedTime: endTime,
          dayOfWeek: DAY_OF_WEEK_NUMBER[dayNum],
          itemId: massageItem.id,
          tutorId: -1,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const bookMassageHandler = () => {
    if (getAuth) {
      const process = window.confirm("예약 하시겠습니까?");
      if (process) {
        changeBookHandler();
        navigate("/mypage/order");
        return;
      }
    }
    dispatch(
      openModal({ type: "LoginModal", props: { path: "mypage/order" } })
    );
  };

  return (
    <SummaryBoxStyle>
      <SummaryListStyle>
        <SummaryItemStyle>
          <KeyStyle>받으실 마사지</KeyStyle>
          <span>{massageItem.displayItem}</span>
        </SummaryItemStyle>
        <SummaryItemStyle>
          <KeyStyle>받으실 날짜</KeyStyle>
          <span>{simpleDate}</span>
        </SummaryItemStyle>
        <SummaryItemStyle>
          <KeyStyle>받으실 시간</KeyStyle>
          <span>
            {startTime} - {endTime} ({selectedMassageTime}분)
          </span>
        </SummaryItemStyle>
        <SummaryItemStyle>
          <KeyStyle>금액</KeyStyle>
          <span>{addComma(selectedMassagePrice)}</span>
        </SummaryItemStyle>
      </SummaryListStyle>
      <div>
        <BookButtonStyle onClick={bookMassageHandler}>예약하기</BookButtonStyle>
      </div>
    </SummaryBoxStyle>
  );
};

export default BookingSummary;

const SummaryBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-right: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 85%;
    margin: auto;
    margin-top: 1rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    width: 100%;
  }
`;

const SummaryListStyle = styled.div`
  flex: 1;
`;

const SummaryItemStyle = styled.div`
  padding: 1rem;
  display: flex;

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
`;

const KeyStyle = styled.span`
  flex: 1;
  text-align: left;
`;

const BookButtonStyle = styled.button`
  background-color: transparent;
  cursor: pointer;
  padding: 0.5rem;
  width: 50%;
  border-radius: 10px;
  border: 2px solid lightgrey;
  float: right;
  color: black;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 40%;
    float: none;
    margin-top: 2rem;
  }
`;
