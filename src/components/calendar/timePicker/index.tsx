import styled from "styled-components";
import React from "react";
import theme from "../../../styles/theme";
import {
  calculateMaxTime,
  calculateMinTime,
  disableSelectability,
  generateTimeArray,
  splitTimeArrays,
} from "../../../util/time";
import DropDown, { TDropDownItem } from "../../common/dropdown";

type TimePickerType = {
  timeInterval: number;
  minTime?: string;
  maxTime?: string;
  excludeTimes?: string[];
  handleTimePicker: (value: number | string) => void;
  selectedTime: string;
  placeHolder?: string;
};

const TimePicker = ({
  timeInterval,
  minTime,
  maxTime,
  excludeTimes,
  handleTimePicker,
  selectedTime,
  placeHolder,
}: TimePickerType) => {
  let timeList: TDropDownItem[] = generateTimeArray(timeInterval);

  if (minTime) {
    timeList = calculateMinTime(timeList, minTime);
  }

  if (maxTime) {
    timeList = calculateMaxTime(timeList, maxTime);
  }

  if (excludeTimes) {
    const splitTimeList = splitTimeArrays(excludeTimes, timeInterval);
    timeList = disableSelectability(timeList, splitTimeList);
  }

  return (
    <Self>
      <StyleTimePicker
        list={timeList}
        placeHolder={placeHolder}
        handleTimePicker={handleTimePicker}
        currentValue={selectedTime}
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
