import { FcInfo } from "react-icons/fc";
import { useHover } from "../../../hooks/useHover";
import styled from "styled-components";
import ConditionalDisplay from "../../common/maybe/ConditionalDisplay";
import { ORDER_STATUS_TYPE_KEYS } from "../../../@types/mypage/orders";

type OrderStatusType = {
  status: ORDER_STATUS_TYPE_KEYS;
};

const OrderStatus = ({ status }: OrderStatusType) => {
  const { ref, isHover } = useHover();

  return (
    <ConditionalDisplay condition={status === "PENDING"}>
      <IconBoxStyle ref={ref}>
        <FcInfo />
        <ConditionalDisplay condition={isHover}>
          <span>예약 확인 중 입니다.</span>
        </ConditionalDisplay>
      </IconBoxStyle>
    </ConditionalDisplay>
  );
};

export default OrderStatus;

const IconBoxStyle = styled.div`
  gap: 0.2rem;
  cursor: pointer;

  span {
    font-size: 0.9rem;
    color: #555555;
  }
`;
