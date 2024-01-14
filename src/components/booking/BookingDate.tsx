import styled from "styled-components";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import {
  addFewMinutes,
  isTimeOverlaps,
  splitTimeArrays,
} from "../../util/time";
import { getMassageDetail } from "../../stores/massageSlice";
import { ORDER_ERROR_MESSAGE } from "../../const/book/errorMessage";

const BookingDate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedMassageDetail = useSelector(getMassageDetail);
  const selectedMassageTime = selectedMassageDetail[0].time;

  const { isOpen, showModal, closeModal } = useModal();
  const [date, setDate] = useState(new Date().toString());
  const [selectedTime, setSelectedTime] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const targetDate = makeSimpleDate(date);
  const timeInterval = 30;

  const { data: bookedData = [] } = useGetBookedTimeListQuery(targetDate);

  const handleReset = () => {
    setSelectedTime("");
    setIsSelected(false);
  };

  const checkBookAvailability = useCallback(() => {
    const spreadData = splitTimeArrays(bookedData, timeInterval);
    const fullDate = `${date}T${selectedTime}`;
    const endTime = addFewMinutes(fullDate, selectedMassageTime);
    const result = isTimeOverlaps(spreadData, selectedTime, endTime);

    if (result.length) {
      alert(ORDER_ERROR_MESSAGE.notice_overlap_time);
      handleReset();
    }
  }, [bookedData, date, selectedMassageTime, selectedTime]);

  const isInvalidBusinessHour = useCallback(() => {
    if (selectedTime === "19:30" && 90 < selectedMassageTime) {
      alert(ORDER_ERROR_MESSAGE.notice_over_time);
      handleReset();
    } else if (selectedTime === "20:00" && 60 < selectedMassageTime) {
      alert(ORDER_ERROR_MESSAGE.notice_over_time);
      handleReset();
    } else if (selectedTime === "20:30") {
      alert(ORDER_ERROR_MESSAGE.notice_available_time);
      handleReset();
    } else if (selectedTime === "21:00") {
      alert(ORDER_ERROR_MESSAGE.notice_business_time);
      handleReset();
    } else {
      return true;
    }
  }, [selectedMassageTime, selectedTime]);

  useEffect(() => {
    checkBookAvailability();
  }, [checkBookAvailability]);

  useEffect(() => {
    isInvalidBusinessHour();
  }, [isInvalidBusinessHour]);

  const handleDatePicker = (date: string, e?: React.MouseEvent) => {
    setDate(date);
  };

  const handleTimePicker = (value: string | number) => {
    setSelectedTime(String(value));

    // <--! 날짜 바뀔때마다 value 초기화하므로 handleTimePicker 함수가 실행됨 !-->
    if (value) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  return (
    <>
      <ConditionalDisplay isShow={isOpen}>
        <CalendarModal
          closeModal={closeModal}
          onClick={handleDatePicker}
          value={date}
          bookedData={bookedData}
          handleTimePicker={handleTimePicker}
          selectedTime={selectedTime}
          isSelected={isSelected}
          timeInterval={timeInterval}
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
        <BookingBreakDown selectedDate={date} selectedTime={selectedTime} />
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
  flex-direction: column;
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
