import { FcInfo } from "react-icons/fc";
import { useHover } from "../../../hooks/useHover";
import {
  ORDER_STATUS_TYPE_KEYS,
  ORDER_STATUS_TYPE_VALUES,
} from "../../../@types/mypage/orders";

import styled from "styled-components";
import ConditionalDisplay from "../../common/maybe/ConditionalDisplay";
import theme from "../../../styles/theme";

type OrderStatusType = {
  status: ORDER_STATUS_TYPE_KEYS;
  displayStatus: ORDER_STATUS_TYPE_VALUES;
};

const OrderStatus = ({ status, displayStatus }: OrderStatusType) => {
  const { ref, isHover } = useHover();

  return (
    <OrderItemBoxStyle>
      <KeyStyle>예약 상태</KeyStyle>
      <span>{displayStatus}</span>
      <ConditionalDisplay condition={status === "PENDING"}>
        <IconBoxStyle ref={ref}>
          <FcInfo />
          <ConditionalDisplay condition={isHover}>
            <span>예약 확인 중 입니다.</span>
          </ConditionalDisplay>
        </IconBoxStyle>
      </ConditionalDisplay>
    </OrderItemBoxStyle>
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
