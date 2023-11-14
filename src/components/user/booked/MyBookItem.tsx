import styled from "styled-components";
import { addComma } from "../../../util/price";
import { MEDIA_QUERY } from "../../../const/devise";
import {
  MY_BOOK_LIST_TYPE,
  ORDER_STATUS_TYPE_KEYS,
} from "../../../@types/mypage";
import { MASSAGE_ITEM } from "../../../const/book/massage";
import { ORDER_STATUS } from "../../../const/mypage";

const MyBookItem = ({ book }: { book: MY_BOOK_LIST_TYPE }) => {
  const isWaiting =
    book.orderStatus === "requesting" || book.orderStatus === "confirmed";

  const cancelOrderHandler = (
    orderStatus: ORDER_STATUS_TYPE_KEYS,
    id: number
  ) => {
    /// 예약 시간
  };

  return (
    <BookItemStyle>
      <OrderDateStyle>{book.orderDate}</OrderDateStyle>
      <OrderItemStyle>{MASSAGE_ITEM[book.orderItem]}</OrderItemStyle>

      <OrderDetailStyle>
        <span>{book.massageDate}</span>
        <span>{book.massageTime}</span>
      </OrderDetailStyle>
      <OrderPriceStyle>{addComma(book.orderPrice)}</OrderPriceStyle>
      <OrderStatusStyle>
        <span>{ORDER_STATUS[book.orderStatus]}</span>
        {isWaiting && (
          <ButtonStyle
            onClick={() => cancelOrderHandler(book.orderStatus, book.id)}
          >
            예약취소
          </ButtonStyle>
        )}
      </OrderStatusStyle>
    </BookItemStyle>
  );
};

export default MyBookItem;

const BookItemStyle = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid lightgrey;
  padding: 1rem;
  text-align: center;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    flex-direction: column;
    text-align: left;
    border-bottom: none;
  }
`;

const OrderDateStyle = styled.div`
  width: 20%;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    font-weight: bold;
    padding: 0.5rem;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
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
  flex-direction: row;
  justify-content: center;

  span:last-child {
    margin-left: 0.8rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    padding: 0.5rem;
    width: 100%;
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
  flex-direction: column;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    padding: 0.5rem;
    flex-direction: row;
    width: 100%;
    align-items: center;
  }
`;

const ButtonStyle = styled.button`
  background-color: white;
  cursor: pointer;
  border: 1px solid lightgrey;
  width: 5rem;
  margin: 0.5rem auto;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    margin: 0;
    margin-left: 0.5rem;
  }
`;
