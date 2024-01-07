import styled from "styled-components";
import { useDeleteOrderDataMutation } from "../../../api/orders/ordersQuery";
import { useNavigate, useParams } from "react-router-dom";
import { FcInfo } from "react-icons/fc";
import { useHover } from "../../../hooks/useHover";
import CommonButton from "../../common/button/CommonButton";
import theme from "../../../styles/theme";

const MyOrderSummary = () => {
  /// orderStatus === "PENDING" or "CONFIRM" 일때만 예약 취소 가능
  /// 예약 시간 2시간 전 예약 안내 연락 보내기
  /// 30분 지나면 예약 취소 불가

  const { ref, isHover } = useHover();
  const navigate = useNavigate();
  const { id } = useParams();

  const [deleteOrder] = useDeleteOrderDataMutation();

  const cancelOrderHandler = () => {
    const process = window.confirm("예약을 취소하시겠습니까?");
    if (process) {
      deleteOrder(Number(id));
      navigate("/mypage/order");
    }
  };

  return (
    <div>
      <HeaderStyle>
        <OrderedDateStyle>2023-11-15 예약</OrderedDateStyle>
        <CommonButton
          type="rectangle"
          onClickButton={cancelOrderHandler}
          width="5rem"
        >
          예약 취소
        </CommonButton>
      </HeaderStyle>
      <ContentBoxStyle>
        <OrderItemBoxStyle>
          <KeyStyle>예약한 마사지</KeyStyle>
          <span>건식 마사지</span>
        </OrderItemBoxStyle>
        <OrderItemBoxStyle>
          <KeyStyle>예약한 날짜</KeyStyle>
          <span>2023-11-20</span>
        </OrderItemBoxStyle>
        <OrderItemBoxStyle>
          <KeyStyle>예약한 시간</KeyStyle>
          <span>12:00 - 13:00</span>
        </OrderItemBoxStyle>
        <OrderItemBoxStyle>
          <KeyStyle>금액</KeyStyle>
          <span>60,000원</span>
        </OrderItemBoxStyle>
        <OrderItemBoxStyle>
          <KeyStyle>예약 상태</KeyStyle>
          <span>요청중</span>

          <InformationBoxStyle ref={ref}>
            <FcInfo />
            {isHover && <span>예약 확인 중 입니다.</span>}
          </InformationBoxStyle>
        </OrderItemBoxStyle>
      </ContentBoxStyle>
    </div>
  );
};

export default MyOrderSummary;

const InformationBoxStyle = styled.div`
  display: flex;
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
