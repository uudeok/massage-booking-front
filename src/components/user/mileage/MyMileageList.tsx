import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";

const MyMileageList = () => {
  // 개인 고객 조회

  return (
    <LayoutStyle>
      <HeaderLayoutStyle>
        <OrderDateStyle>예약일자</OrderDateStyle>
        <OrderItemStyle>적립금</OrderItemStyle>
        <OrderDetailStyle>관련 예약</OrderDetailStyle>
        <OrderPriceStyle>관련 내용</OrderPriceStyle>
      </HeaderLayoutStyle>
      <ContentLayoutStyle>{/* mileageItem 자리 */}</ContentLayoutStyle>
    </LayoutStyle>
  );
};

export default MyMileageList;

const LayoutStyle = styled.div`
  padding: 1rem;
  width: 100%;
`;

const HeaderLayoutStyle = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 2px solid black;
  border-bottom: 1px solid lightgrey;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    font-size: 0.8rem;
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
  width: 40%;
`;

const OrderPriceStyle = styled.div`
  width: 20%;
`;
