import styled from "styled-components";
import { MY_BOOK_LIST } from "../../const/mypage";
import MyBookItem from "./MyBookItem";
import { MEDIA_QUERY } from "../../const/devise";

const MyBookList = () => {
  // 개인 고객 조회

  return (
    <LayoutStyle>
      <HeaderStyle>‖ 예약 내역</HeaderStyle>
      <HeaderLayoutStyle>
        <OrderDateStyle>예약일자</OrderDateStyle>
        <OrderItemStyle>상품정보</OrderItemStyle>
        <OrderDetailStyle>예약상세</OrderDetailStyle>
        <OrderPriceStyle>금액</OrderPriceStyle>
        <OrderStatusStyle>예약처리상태</OrderStatusStyle>
      </HeaderLayoutStyle>
      <ContentLayoutStyle>
        {MY_BOOK_LIST.map((book) => (
          <MyBookItem key={book.id} book={book} />
        ))}
      </ContentLayoutStyle>
    </LayoutStyle>
  );
};

export default MyBookList;

const LayoutStyle = styled.div`
  padding: 1rem;
  width: 100%;
`;

const HeaderStyle = styled.h2`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
`;

const HeaderLayoutStyle = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 2px solid black;
  border-bottom: 1px solid lightgrey;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    display: none;
  }
`;

const ContentLayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
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
