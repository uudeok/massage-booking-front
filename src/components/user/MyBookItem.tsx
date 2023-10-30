import styled from "styled-components";
import { TBookItem } from "../../@types/user/mypage";
import { addComma } from "../../util";
import { MEDIA_QUERY } from "../../const/devise";

const MyBookItem = ({ book }: { book: TBookItem }) => {
  const isConfirmed =
    book.orderStatus === "요청중" || book.orderStatus === "예약확정";

  const cancelOrderHandler = (id: number) => {
    const process = window.confirm("예약을 취소하시겠습니까?");
    if (process) {
      // 오더 취소하는 API
      console.log(id);
    }
  };

  return (
    <BookItemStyle>
      <OrderDateStyle>{book.orderDate}</OrderDateStyle>
      <OrderItemStyle>{book.orderItem}</OrderItemStyle>

      <OrderDetailStyle>
        <span>{book.massageDate}</span>
        <span>{book.massageTime}</span>
      </OrderDetailStyle>
      <OrderPriceStyle>{addComma(book.orderPrice)}</OrderPriceStyle>
      <OrderStatusStyle>
        <span>{book.orderStatus}</span>
        {isConfirmed && (
          <ButtonStyle onClick={() => cancelOrderHandler(book.id)}>
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
