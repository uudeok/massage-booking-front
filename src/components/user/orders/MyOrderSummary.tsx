import styled from "styled-components";
import { useDeleteOrderDataMutation } from "../../../api/orders/ordersQuery";
import { useNavigate, useParams } from "react-router-dom";
import { FcInfo } from "react-icons/fc";
import { useHover } from "../../../hooks/useHover";
import CommonButton from "../../common/button/CommonButton";
import theme from "../../../styles/theme";
import RenderList from "../../common/map/RenderList";
import ConditionalDisplay from "../../common/maybe/ConditionalDisplay";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../stores/store";

type OrderDetailType = {
  key: string;
  value: string;
};

const MyOrderSummary = () => {
  /// orderStatus === "PENDING" or "CONFIRM" 일때만 예약 취소 가능
  /// 30분 지나면 예약 취소 불가

  // orderStat === "CANCEL" or "COMPLETED" 일때 이 마사지 그대로 예약하기 기능
  // 지금은 id 가 홀수냐 짝수냐에 따라 구분함

  const { ref, isHover } = useHover();
  const { id } = useParams();
  const navigate = useNavigate();

  let buttonLabel = "다시 예약 하기";

  const [deleteOrder] = useDeleteOrderDataMutation();

  if (Number(id) % 2 === 1) {
    buttonLabel = "예약 취소";
  }

  const cancelOrderHandler = () => {
    const process = window.confirm("예약을 취소하시겠습니까?");
    if (process) {
      try {
        deleteOrder(Number(id));
      } catch (error) {
        console.log(error);
      } finally {
        navigate("/mypage/order");
      }
    }
  };

  const copyOrderHandler = () => {
    const process = window.confirm(
      "건식 마사지 (60분) 예약하시겠습니까? 확인을 누르시면 날짜 선택 페이지로 이동 됩니다."
    );
  };

  const ORDER_DETAIL: OrderDetailType[] = [
    { key: "예약한 마사지", value: "건식 마사지" },
    { key: "예약한 날짜", value: "2023-11-20" },
    { key: "예약한 시간", value: "12:00 - 13:00" },
    { key: "금액", value: "60,000원" },
  ];

  const renderOrderDetail = (orderDetail: OrderDetailType) => (
    <OrderItemBoxStyle key={orderDetail.value}>
      <KeyStyle>{orderDetail.key}</KeyStyle>
      <span>{orderDetail.value}</span>
    </OrderItemBoxStyle>
  );

  return (
    <div>
      <HeaderStyle>
        <OrderedDateStyle>2023-11-15 예약</OrderedDateStyle>
        <CommonButton
          type="rectangle"
          onClickButton={
            Number(id) % 2 === 1 ? cancelOrderHandler : copyOrderHandler
          }
          width="6.5rem"
          fontFamily={theme.fonts.pretend}
        >
          {buttonLabel}
        </CommonButton>
      </HeaderStyle>

      <ContentBoxStyle>
        <RenderList data={ORDER_DETAIL} renderItem={renderOrderDetail} />

        <OrderItemBoxStyle>
          <KeyStyle>예약 상태</KeyStyle>
          <span>요청 중</span>
          <IconBoxStyle ref={ref}>
            <FcInfo />
            <ConditionalDisplay isShow={isHover}>
              <span>예약 확인 중 입니다.</span>
            </ConditionalDisplay>
          </IconBoxStyle>
        </OrderItemBoxStyle>
      </ContentBoxStyle>
    </div>
  );
};

export default MyOrderSummary;

const IconBoxStyle = styled.div`
  gap: 0.2rem;
  cursor: pointer;

  span {
    font-size: 0.9rem;
    color: #555555;
  }
`;

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 2px solid black;
  padding: 1rem;
  margin-top: 1rem;
`;

const OrderedDateStyle = styled.span`
  flex: 1;
`;

const ContentBoxStyle = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

const OrderItemBoxStyle = styled.div`
  display: flex;
  padding: 0.5rem;
`;

const KeyStyle = styled.span`
  width: 16%;
  color: #555555;

  @media only screen and (max-width: ${theme.devise.bigMobileWidth}) {
    width: 40%;
  }
`;
