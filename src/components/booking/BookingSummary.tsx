import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";

const BookingSummary = () => {
  return (
    <>
      <HeaderStyle>예약 주문서 확인</HeaderStyle>
      <SummaryBoxStyle>
        <TimeBoxStyle>
          <span>마사지 시간</span>
          <span>09:00 - 10:00 (60분)</span>
        </TimeBoxStyle>
        <ItemBoxStyle>
          <span>마사지 종류</span>
          <span>건식마사지</span>
        </ItemBoxStyle>
        <ItemBoxStyle>
          <span>받으실 날짜</span>
          <span>2023-10-20</span>
        </ItemBoxStyle>
        <LastItemBoxStyle>
          <span>금액</span>
          <span>60,000원</span>
        </LastItemBoxStyle>
      </SummaryBoxStyle>
    </>
  );
};

export default BookingSummary;

const HeaderStyle = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 1.5rem;
  font-family: "GmarketSansMedium";

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    margin-top: 3rem;
    font-size: 1.5rem;
  }
`;

const SummaryBoxStyle = styled.div`
  width: 100%;
  height: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  /* box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2); */
  text-align: center;
  border-radius: 10px;
  border: 1px solid lightgrey;
  font-family: "GmarketSansMedium";

  div {
    &:hover {
      scale: calc(1.1);
    }
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    flex-direction: column;
  }
`;

const TimeBoxStyle = styled.div`
  width: 30%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid lightgrey;

  span:first-child {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  span:last-child {
    color: #76916a;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid lightgrey;
    font-size: 1rem;
    padding: 1rem;
  }
`;

const ItemBoxStyle = styled.div`
  width: 24%;
  border-right: 1px solid lightgrey;
  padding: 3rem;
  display: flex;
  flex-direction: column;

  span:first-child {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  span:last-child {
    color: #76916a;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid lightgrey;
    font-size: 1rem;
    padding: 1rem;
  }
`;

const LastItemBoxStyle = styled.div`
  width: 20%;
  padding: 3rem;
  display: flex;
  flex-direction: column;

  span:first-child {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  span:last-child {
    color: #76916a;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid lightgrey;
    font-size: 1rem;
    padding: 1rem;
  }
`;
