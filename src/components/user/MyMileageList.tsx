import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";

const MyMileageList = () => {
  // 개인 고객 조회

  return (
    <LayoutStyle>
      <HeaderStyle>‖ 적립금 내역</HeaderStyle>
      <SummaryBoxStyle>
        <SummaryLeftBoxStyle>
          <span>총 적립금</span>
          <span>0원</span>
        </SummaryLeftBoxStyle>
        <SummaryRightBoxStyle>
          <span>사용한 적립금</span>
          <span>0원</span>
        </SummaryRightBoxStyle>
      </SummaryBoxStyle>
      <HeaderLayoutStyle>
        <OrderDateStyle>예약일자</OrderDateStyle>
        <OrderItemStyle>적립금</OrderItemStyle>
        <OrderDetailStyle>관련 예약</OrderDetailStyle>
        <OrderPriceStyle>관련 내용</OrderPriceStyle>
      </HeaderLayoutStyle>
      <ContentLayoutStyle></ContentLayoutStyle>
    </LayoutStyle>
  );
};

export default MyMileageList;

const LayoutStyle = styled.div`
  padding: 1rem;
  width: 100%;
`;

const HeaderStyle = styled.h2`
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
`;

const SummaryBoxStyle = styled.div`
  border: 3px solid lightgrey;
  height: 5rem;
  margin-top: 1rem;
  padding: 1rem;
  display: flex;

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    flex-direction: column;
    height: 6rem;
  }
`;

const SummaryLeftBoxStyle = styled.div`
  width: 50%;
  display: flex;
  padding: 0.5rem;
  border-right: 1px solid lightgrey;

  span:first-child {
    flex: 1;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    border: none;
    width: 100%;
  }
`;

const SummaryRightBoxStyle = styled.div`
  width: 50%;
  display: flex;
  padding: 0.5rem;
  span:first-child {
    flex: 1;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    width: 100%;
  }
`;

const HeaderLayoutStyle = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 2px solid black;
  border-bottom: 1px solid lightgrey;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
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
