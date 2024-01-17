import { addComma } from "../../util/price";
import { useSelector } from "react-redux";
import {
  getMassageDetail,
  getSelectedMassageItem,
} from "../../stores/massageSlice";
import { addFewMinutes } from "../../util/time";
import { BOOKING_ITEM_VALUE } from "../../@types/massage";
import { makeSimpleDate } from "../../util/date";
import SectionTitle from "../common/shared/SectionTitle";
import styled from "styled-components";
import BookingConfirm from "./BookingConfirm";
import RenderList from "../common/map/RenderList";
import theme from "../../styles/theme";

type TProps = {
  selectedDate: string;
  selectedTime: string;
  showModal: () => void;
};

type SummaryListType = {
  key: string;
  value: string | BOOKING_ITEM_VALUE | JSX.Element;
};

const BookingSummary = ({ selectedDate, selectedTime, showModal }: TProps) => {
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
      value: (
        <Button onClick={() => showModal()}>
          {selectedTime ? timeLabel : "시간 선택 🕒"}
        </Button>
      ),
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
      <SectionTitle>※ 예약 내역</SectionTitle>
      <SummaryListStyle>
        <RenderList data={SUMMARY_LIST} renderItem={renderSummaryItem} />
      </SummaryListStyle>

      <BookingConfirm
        massageItem={massageItem}
        selectedDate={selectedDate}
        massagePrice={selectedMassagePrice}
        startTime={selectedTime}
        endTime={endTime}
      />
    </SummaryBoxStyle>
  );
};

export default BookingSummary;

const Button = styled.button`
  border: 1px solid lightgrey;
  padding: 0.5rem;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  background-color: transparent;
  font-family: ${theme.fonts.pretend};
  font-size: 1rem;

  &:hover {
    background-color: ${theme.palette.greenDk};
    color: ${theme.palette.white};
  }
`;

const SummaryBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
