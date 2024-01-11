import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetBookedTimeListQuery } from "../../api/book/bookQuery";
import BookingBreakDown from "./BookingBreakDown";
import { makeSimpleDate, spreadBookedData } from "../../util/date";
import CommonButton from "../common/button/CommonButton";
import { AppDispatch } from "../../stores/store";
import { subTabNum } from "../../stores/tabSlice";
import theme from "../../styles/theme";
import { useModal } from "../../hooks/useModal";
import ConditionalDisplay from "../common/maybe/ConditionalDisplay";
import CalendarModal from "../common/UI/modal/CalendarModal";

const BookingDate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [endTime, setEndTime] = useState<Date | null>(null);
  const { isOpen, showModal, closeModal } = useModal();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const targetDate = makeSimpleDate(selectedDate);

  const { data = [] } = useGetBookedTimeListQuery(targetDate);

  const onClick = (date: string) => {
    const selected = new Date(date);
    setSelectedDate(selected);
  };

  // useEffect(() => {
  //   const spreadData = spreadBookedData(data)
  // },[data])

  const spreadData = useMemo(() => spreadBookedData(data), [data]);
  console.log(spreadData);

  return (
    <>
      <ConditionalDisplay isShow={isOpen}>
        <CalendarModal closeModal={closeModal} onClick={onClick} />
      </ConditionalDisplay>

      <ContainerStyle>
        <CommonButton type="plain" onClickButton={() => dispatch(subTabNum())}>
          뒤로가기
        </CommonButton>
        <CalendarStyle>
          <Title>날짜 및 시간을 선택해주세요</Title>
          <CommonButton
            type="rectangle"
            width="12rem"
            $padding="0.5rem"
            onClickButton={() => showModal()}
          >
            날짜 선택하기
          </CommonButton>
        </CalendarStyle>
        <BookingBreakDown
          selectedDate={selectedDate}
          massageEndTime={endTime}
        />
      </ContainerStyle>
    </>
  );
};

export default BookingDate;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
  margin: 2rem auto;
  font-family: ${theme.fonts.pretend};

  @media only screen and (max-width: ${theme.devise.notebookWidth}) {
    width: 100%;
  }
`;

const CalendarStyle = styled.div`
  display: flex;
  padding: 1rem;
  box-shadow: 0 0 0.3rem 0 rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media only screen and (max-width: ${theme.devise.bigMobileWidth}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
`;
