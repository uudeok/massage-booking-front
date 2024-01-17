import styled from "styled-components";
import React from "react";
import theme from "../../../styles/theme";
import {
  calculateMaxTime,
  calculateMinTime,
  adjustSelectability,
  generateTimeArray,
} from "../../../util/time";
import DropDown, { Time } from "../../common/dropdown";

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
  timeInterval,
  minTime,
  maxTime,
  excludeTimes,
  handleTimePicker,
  selectedTime,
  placeHolder,
  selectable,
  filterTime,
}: TimePickerType) => {
  if (!timeInterval) {
    timeInterval = 60;
  }

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

export default React.memo(TimePicker);

const Self = styled.div`
  padding: 0.5rem;
  position: absolute;
  width: 100%;
`;

const StyleTimePicker = styled(DropDown)`
  font-family: ${theme.fonts.pretend};
  background-color: aliceblue;
`;
