import styled from "styled-components";
import React, { useEffect } from "react";
import theme from "../../../../styles/theme";
import Calendar from "../../../calendar";
import CommonButton from "../../button/CommonButton";
import { addDays } from "date-fns";

export type TProps = {
  closeModal: () => void;
  onClick: (date: string, e?: React.MouseEvent) => void;
  value: string;
  bookedData?: string[];
  handleTimePicker: (value: string | number) => void;
  selectedTime: string;
  isSelected: boolean;
  timeInterval: number;
};

const SUNDAY = 0;

const CalendarModal = ({
  closeModal,
  onClick,
  value,
  bookedData,
  handleTimePicker,
  selectedTime,
  isSelected,
  timeInterval,
}: TProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const addTwoWeeks = addDays(new Date(), 14);

  const isOffDay = (date: Date | string) => {
    const day = new Date(date).getDay();
    return day !== SUNDAY;
  };

  return (
    <>
      <BackDropStyle onClick={() => closeModal()} />
      <ModalStyle>
        <InnerBoxStyle>
          <Calendar
            onClick={onClick}
            minDate={new Date()}
            maxDate={addTwoWeeks}
            curMonthOnly={true}
            value={value}
            filterDate={isOffDay}
            showTimePicker={true}
            timeInterval={timeInterval}
            minTime="09:00"
            maxTime="21:00"
            excludeTimes={bookedData}
            handleTimePicker={handleTimePicker}
            selectedTime={selectedTime}
            placeHolder="시간 선택"
          />
        </InnerBoxStyle>
        <ButtonWrapper>
          <CommonButton
            onClickButton={() => closeModal()}
            width="40%"
            $borderRadius="8px"
            $border="1px solid lightgrey"
          >
            취소 하기
          </CommonButton>
          <CommonButton
            width="40%"
            $borderRadius="8px"
            $border="1px solid lightgrey"
            disabled={!isSelected}
            onClickButton={() => closeModal()}
          >
            선택 완료
          </CommonButton>
        </ButtonWrapper>
      </ModalStyle>
    </>
  );
};

export default CalendarModal;

const InnerBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  height: 85%;
`;

const ButtonWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 12%;
`;

const BackDropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalStyle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 3%;
  justify-content: center;
  align-items: center;
  left: calc(50% - 10rem);
  width: 26rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  background-color: white;
  height: 38rem;
  border-radius: 15px;

  @media only screen and (max-width: ${theme.devise.tabletWidth}) {
    width: 26rem;
    left: calc(50% - 13rem);
  }

  @media only screen and (max-width: ${theme.devise.mobileWidth}) {
    width: 20rem;
    left: calc(50% - 10rem);
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
