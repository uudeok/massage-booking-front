import { Time } from "../../dropdown";
import styled from "styled-components";
import Calendar from "../../../calendar";
import CommonButton from "../../button/CommonButton";
import dayjs from "dayjs";
import Modal from "./Modal";

export type TProps = {
  closeModal: () => void;
  onClick: (date: string) => void;
  value: string;
  bookedData?: string[];
  handleTimePicker: (value: string) => void;
  selectedTime: string;
  isSelected: boolean;
  timeInterval: number;
};

const SUNDAY = 0 as const;

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
  const addTwoWeeks = dayjs(new Date()).add(14, "day").toDate();

  const isOffDay = (date: string) => {
    const day = new Date(date).getDay();
    return day !== SUNDAY;
  };

  const filterPassedTime = (time: Time) => {
    const currentTime = new Date().getTime();
    const [year, month, day] = value.split("-").map((str) => Number(str));
    const [hour, minutes] = time.label.split(":").map((str) => Number(str));

    const selectTime = new Date(year, month - 1, day, hour, minutes).getTime();

    return currentTime < selectTime;
  };

  return (
    <Modal closeModal={closeModal} height="42rem" $top="3%" $radius="15px">
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
          filterTime={filterPassedTime}
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
    </Modal>
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
