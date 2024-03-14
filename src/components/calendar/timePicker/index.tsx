import styled from "styled-components";
import React from "react";
import theme from "../../../styles/theme";
import {
  calculateMaxTime,
  calculateMinTime,
  adjustSelectability,
  generateTimeArray,
} from "../../../util/time";
import DropDown, { Time } from "./Dropdown";

export type TimePickerType = {
  handleTimePicker: (value: string) => void;
  selectedTime: string;
  timeInterval?: number;
  minTime?: string;
  maxTime?: string;
  excludeTimes?: string[];
  placeHolder?: string;
  selectable?: boolean;
  filterTime?: (time: Time) => boolean;
};

const TimePicker = ({
  timeInterval = 60,
  minTime,
  maxTime,
  excludeTimes,
  handleTimePicker,
  selectedTime,
  placeHolder,
  selectable,
  filterTime,
}: TimePickerType) => {
  // <-! timeInterval 단위로 시간을 나눠준다 !->
  let timeList: Time[] = generateTimeArray(timeInterval);

  if (minTime) {
    timeList = calculateMinTime(timeList, minTime);
  }

  if (maxTime) {
    timeList = calculateMaxTime(timeList, maxTime);
  }

  if (excludeTimes) {
    timeList = adjustSelectability(timeList, excludeTimes);
  }

  return (
    <Self>
      <StyleTimePicker
        list={timeList}
        placeHolder={placeHolder}
        handleTimePicker={handleTimePicker}
        currentValue={selectedTime}
        selectable={selectable}
        filterTime={filterTime}
      />
    </Self>
  );
};

export default TimePicker;

const Self = styled.div`
  padding: 0.5rem;
  position: absolute;
  width: 100%;
`;

const StyleTimePicker = styled(DropDown)`
  font-family: ${theme.fonts.pretend};
  background-color: aliceblue;
`;
