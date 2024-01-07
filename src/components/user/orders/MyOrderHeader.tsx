import styled from "styled-components";
import theme from "../../../styles/theme";

const MyOrderHeader = () => {
  return (
    <HeaderLayoutStyle>
      <OrderDateStyle>예약일자</OrderDateStyle>
      <OrderItemStyle>상품정보</OrderItemStyle>
      <OrderDetailStyle>예약상세</OrderDetailStyle>
      <OrderPriceStyle>금액</OrderPriceStyle>
      <OrderStatusStyle>예약처리상태</OrderStatusStyle>
    </HeaderLayoutStyle>
  );
};

export default MyOrderHeader;

const HeaderLayoutStyle = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 2px solid black;
  border-bottom: 1px solid lightgrey;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    display: none;
  }
`;

const OrderDateStyle = styled.div`
  width: 20%;
`;

const OrderItemStyle = styled.div`
  width: 20%;
`;

const OrderDetailStyle = styled.div`
  width: 30%;
`;

const OrderPriceStyle = styled.div`
  width: 15%;
`;

const OrderStatusStyle = styled.div`
  width: 15%;
`;
