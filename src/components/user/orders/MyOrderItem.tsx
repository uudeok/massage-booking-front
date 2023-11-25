import styled from "styled-components";
import { addComma } from "../../../util/price";
import { MEDIA_QUERY } from "../../../const/devise";
import { TOrderType } from "../../../@types/mypage/orders";
import { Link } from "react-router-dom";
import { makeSimpleDate } from "../../../util/date";
import { makeSimpleTime } from "../../../util/time";

const MyOrderItem = ({ order }: { order: TOrderType }) => {
  const createdAt = makeSimpleDate(order.createdAt);
  const startDate = makeSimpleDate(order.startReservedAt);
  const startTime = makeSimpleTime(order.startReservedAt);
  const endTime = makeSimpleTime(order.endReservedAt);

  return (
    <BookItemStyle>
      <OrderDateBoxStyle>
        <OrderDateStyle>{createdAt}</OrderDateStyle>
        <ViewDetailsStyle>
          <Link to={`${order.id}`}>상세보기</Link>
        </ViewDetailsStyle>
      </OrderDateBoxStyle>
      <OrderItemStyle>{order.item}</OrderItemStyle>

      <OrderDetailStyle>
        <span>{startDate}</span>
        <span>
          {startTime} - {endTime}
        </span>
      </OrderDetailStyle>
      <OrderPriceStyle>{addComma(order.price)}</OrderPriceStyle>
      <OrderStatusStyle>
        <span>{order.displayStatus}</span>
      </OrderStatusStyle>
    </BookItemStyle>
  );
};

export default MyOrderItem;

const BookItemStyle = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid lightgrey;
  padding: 1rem;
  text-align: center;
  font-family: "Pretendard-Regular";

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    flex-direction: column;
    text-align: left;
    border-bottom: none;
  }
`;

const OrderDateBoxStyle = styled.div`
  width: 20%;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    padding: 0.5rem;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    flex-direction: row;
    gap: 1rem;
  }
`;

const OrderDateStyle = styled.span`
  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    flex: 1;
    font-weight: bold;
  }
`;

const ViewDetailsStyle = styled.span`
  cursor: pointer;

  a {
    color: #2196f3;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const OrderItemStyle = styled.div`
  width: 20%;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    padding: 0.5rem;
    width: 100%;
  }
`;

const OrderDetailStyle = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    padding: 0.5rem;
    width: 100%;
    flex-direction: row;
    justify-content: left;
  }
`;

const OrderPriceStyle = styled.div`
  width: 15%;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    padding: 0.5rem;
    width: 100%;
  }
`;

const OrderStatusStyle = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  /* font-weight: bold; */

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    padding: 0.5rem;
    flex-direction: row;
    width: 100%;
    justify-content: left;
  }
`;
