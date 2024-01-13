import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetBookedTimeListQuery } from "../../api/book/bookQuery";
import BookingBreakDown from "./BookingBreakDown";
import { makeSimpleDate } from "../../util/date";
import CommonButton from "../common/button/CommonButton";
import { AppDispatch } from "../../stores/store";
import { subTabNum } from "../../stores/tabSlice";
import theme from "../../styles/theme";
import { useModal } from "../../hooks/useModal";
import ConditionalDisplay from "../common/maybe/ConditionalDisplay";
import CalendarModal from "../common/UI/modal/CalendarModal";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

const BookingDate = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isOpen, showModal, closeModal } = useModal();
  const [date, setDate] = useState("");

  const targetDate = makeSimpleDate(date);

  const { data: bookedData = [] } = useGetBookedTimeListQuery(targetDate);

  useEffect(() => {
    const value = format(new Date(), "yyyy-MM-dd", { locale: ko });
    setDate(value);
  }, []);

  const handleDatePicker = (date: string, e?: React.MouseEvent) => {
    setDate(format(new Date(date), "yyyy-MM-dd", { locale: ko }));
  };

  return (
    <>
      <ConditionalDisplay isShow={isOpen}>
        <CalendarModal
          closeModal={closeModal}
          onClick={handleDatePicker}
          value={date}
          bookedData={bookedData}
        />
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
        <BookingBreakDown selectedDate={date} massageEndTime={new Date()} />
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
