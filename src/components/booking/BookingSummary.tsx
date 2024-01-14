import styled from "styled-components";
import { addComma } from "../../util/price";
import { useSelector } from "react-redux";
import {
  getMassageDetail,
  getSelectedMassageItem,
} from "../../stores/massageSlice";
import { addFewMinutes } from "../../util/time";
import BookingConfirm from "./BookingConfirm";
import RenderList from "../common/map/RenderList";
import { BOOKING_ITEM_VALUE } from "../../@types/massage";
import theme from "../../styles/theme";
import { makeSimpleDate } from "../../util/date";
type TProps = {
  selectedDate: string;
  selectedTime: string;
};

type SummaryListType = {
  key: string;
  value: string | number | BOOKING_ITEM_VALUE;
};

const BookingSummary = ({ selectedDate, selectedTime }: TProps) => {
  const massageItem = useSelector(getSelectedMassageItem);
  const massageDetail = useSelector(getMassageDetail);
  const selectedMassageTime = massageDetail[0].time;
  const selectedMassagePrice = massageDetail[0].price;

  const calculateEndTime = (selectedDate: string, selectedTime: string) => {
    const fullDate = `${selectedDate}T${selectedTime}:00`;
    const endTime = addFewMinutes(fullDate, selectedMassageTime);

    return endTime;
  };

  const endTime = calculateEndTime(selectedDate, selectedTime);
  const timeLabel = `${selectedTime}-${endTime} (${selectedMassageTime}분)`;

  const SUMMARY_LIST: SummaryListType[] = [
    { key: "받으실 마사지", value: massageItem.displayItem },
    { key: "받으실 날짜", value: makeSimpleDate(selectedDate) },
    {
      key: "받으실 시간",
      value: selectedTime ? timeLabel : "",
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
        startTime={selectedTime}
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

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    width: 85%;
    margin: auto;
    margin-top: 1rem;
  }

  @media only screen and (max-width: ${theme.devise.bigMobileWidth}) {
    width: 100%;
  }
`;

const SummaryListStyle = styled.div`
  flex: 1;
`;

const SummaryItemStyle = styled.div`
  padding: 1rem;
  display: flex;

  @media only screen and (max-width: ${theme.devise.bigMobileWidth}) {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
`;

const KeyStyle = styled.span`
  flex: 1;
  text-align: left;
`;
