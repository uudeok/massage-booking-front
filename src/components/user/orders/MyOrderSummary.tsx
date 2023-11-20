import styled from "styled-components";
import { MEDIA_QUERY } from "../../../const/devise";

const MyOrderSummary = () => {
  return (
    <div>
      <HeaderStyle>
        <OrderedDateStyle>2023-11-15 예약</OrderedDateStyle>
        <CancelButtonStyle>예약 취소</CancelButtonStyle>
      </HeaderStyle>
      <ContentBoxStyle>
        <InformationBoxStyle>
          <KeyStyle>예약한 마사지</KeyStyle>
          <span>건식 마사지</span>
        </InformationBoxStyle>
        <InformationBoxStyle>
          <KeyStyle>예약한 날짜</KeyStyle>
          <span>2023-11-20</span>
        </InformationBoxStyle>
        <InformationBoxStyle>
          <KeyStyle>예약한 시간</KeyStyle>
          <span>12:00 - 13:00</span>
        </InformationBoxStyle>
        <InformationBoxStyle>
          <KeyStyle>금액</KeyStyle>
          <span>60,000원</span>
        </InformationBoxStyle>
        <InformationBoxStyle>
          <KeyStyle>예약 상태</KeyStyle>
          <span>요청중</span>
        </InformationBoxStyle>
      </ContentBoxStyle>
    </div>
  );
};

export default MyOrderSummary;

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 2px solid black;
  padding: 1rem;
  margin-top: 1rem;
`;

const OrderedDateStyle = styled.span`
  flex: 1;
`;

const CancelButtonStyle = styled.button`
  background-color: transparent;
  cursor: pointer;
`;

const ContentBoxStyle = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

const InformationBoxStyle = styled.div`
  display: flex;
  padding: 0.5rem;
`;

const KeyStyle = styled.span`
  width: 15%;
  color: #555555;

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    width: 40%;
  }
`;
