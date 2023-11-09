import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { useSelector } from "react-redux";
import { BOOKING_ITEM } from "../../const/massage";
import { addComma } from "../../util/price";
import { addMinutesUnit } from "../../util/time";
import { getMassageDetail, getMassageItem } from "../../stores/massageSlice";
import { TMassageTable } from "../../@types/massage";

const BookingSummary = () => {
  const selectedMassage = useSelector(getMassageItem) as TMassageTable;
  const selectedDetail = useSelector(getMassageDetail);
  const time = selectedDetail[0].time;
  const price = selectedDetail[0].price;

  return (
    <>
      <HeaderStyle>예약 주문서 확인</HeaderStyle>
      <SummaryBoxStyle>
        <TimeBoxStyle>
          <span>마사지 시간</span>
          <span>09:00 - 10:00 ({addMinutesUnit(time)})</span>
        </TimeBoxStyle>
        <ItemBoxStyle>
          <span>마사지 종류</span>
          <span>{BOOKING_ITEM[selectedMassage.item]}</span>
        </ItemBoxStyle>
        <ItemBoxStyle>
          <span>받으실 날짜</span>
          <span>2023-10-25</span>
        </ItemBoxStyle>
        <LastItemBoxStyle>
          <span>금액</span>
          <span>{addComma(price)}</span>
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
  text-align: center;
  border-radius: 10px;
  border: 1px solid lightgrey;
  font-family: "GmarketSansMedium";

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
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
    font-size: 1.1rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigNotebookWidth}) {
    span:last-child {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
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

  @media only screen and (max-width: ${MEDIA_QUERY.bigNotebookWidth}) {
    span:last-child {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
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

  @media only screen and (max-width: ${MEDIA_QUERY.bigNotebookWidth}) {
    span:last-child {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: ${MEDIA_QUERY.notebookWidth}) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid lightgrey;
    font-size: 1rem;
    padding: 1rem;
  }
`;
