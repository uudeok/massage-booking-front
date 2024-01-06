import styled from "styled-components";
import { MEDIA_QUERY } from "../../const/devise";
import { addComma } from "../../util/price";
import { useSelector } from "react-redux";
import {
  getMassageDetail,
  getSelectedMassageItem,
} from "../../stores/massageSlice";
import { makeSimpleTime } from "../../util/time";
import { makeSimpleDate } from "../../util/date";
import BookingConfirm from "./BookingConfirm";
import RenderList from "../common/UI/map/RenderList";
import { BOOKING_ITEM_VALUE } from "../../@types/massage";

type TProps = {
  selectedDate: Date;
  massageEndTime: Date | null;
};

type SummaryListType = {
  key: string;
  value: string | number | BOOKING_ITEM_VALUE;
};

const BookingSummary = ({ massageEndTime, selectedDate }: TProps) => {
  const massageItem = useSelector(getSelectedMassageItem);
  const massageDetail = useSelector(getMassageDetail);
  const selectedMassageTime = massageDetail[0].time;
  const selectedMassagePrice = massageDetail[0].price;

  const simpleDate = makeSimpleDate(selectedDate);
  const startTime = makeSimpleTime(selectedDate);
  const endTime = makeSimpleTime(massageEndTime);

  const SUMMARY_LIST: SummaryListType[] = [
    { key: "받으실 마사지", value: massageItem.displayItem },
    { key: "받으실 날짜", value: simpleDate },
    {
      key: "받으실 시간",
      value: `${startTime}-${endTime} (${selectedMassageTime}분)`,
    },
    { key: "금액", value: addComma(selectedMassagePrice) },
  ];

  const renderSummaryItem = (summaryItem: SummaryListType) => (
    <SummaryItemStyle key={summaryItem.key}>
      <KeyStyle>{summaryItem.key}</KeyStyle>
      <span>{summaryItem.value}</span>
    </SummaryItemStyle>
  );

  return (
    <SummaryBoxStyle>
      <SummaryListStyle>
        <RenderList data={SUMMARY_LIST} renderItem={renderSummaryItem} />
      </SummaryListStyle>

      <BookingConfirm
        massageItem={massageItem}
        selectedDate={selectedDate}
        massageTime={selectedMassageTime}
        massagePrice={selectedMassagePrice}
        startTime={startTime}
        endTime={endTime}
      />
    </SummaryBoxStyle>
  );
};

export default BookingSummary;

const SummaryBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-right: 1rem;

  @media only screen and (max-width: ${MEDIA_QUERY.tabletWidth}) {
    width: 85%;
    margin: auto;
    margin-top: 1rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    width: 100%;
  }
`;

const SummaryListStyle = styled.div`
  flex: 1;
`;

const SummaryItemStyle = styled.div`
  padding: 1rem;
  display: flex;

  @media only screen and (max-width: ${MEDIA_QUERY.bigMobileWidth}) {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
`;

const KeyStyle = styled.span`
  flex: 1;
  text-align: left;
`;
