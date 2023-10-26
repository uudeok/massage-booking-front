import styled from "styled-components";

interface IBookItem {
  orderDate: string;
  orderItem: string;
  massageDate: string;
  massageTime: string;
  orderPrice: number;
  orderStatus: string;
  id: number;
}

const MyBookItem = ({ book }: { book: IBookItem }) => {
  return (
    <BookItemStyle>
      <OrderDateStyle>{book.orderDate}</OrderDateStyle>
      <OrderItemStyle>{book.orderItem}</OrderItemStyle>
      <OrderDetailStyle>
        <span>{book.massageDate}</span>
        <span>{book.massageTime}</span>
      </OrderDetailStyle>
      <OrderPriceStyle>{book.orderPrice}</OrderPriceStyle>
      <OrderStatusStyle>{book.orderStatus}</OrderStatusStyle>
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
`;

const OrderDateStyle = styled.div`
  width: 20%;
`;

const OrderItemStyle = styled.div`
  width: 20%;
`;

const OrderDetailStyle = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  span:last-child {
    margin-left: 0.8rem;
  }
`;

const OrderPriceStyle = styled.div`
  width: 15%;
`;

const OrderStatusStyle = styled.div`
  width: 15%;
`;
