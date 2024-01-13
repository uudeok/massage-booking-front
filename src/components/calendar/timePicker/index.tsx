import styled from "styled-components";
import React, { useState } from "react";
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
};

const TimePicker = ({
  timeInterval,
  minTime,
  maxTime,
  excludeTimes,
}: TimePickerType) => {
  const [curTime, setCurTime] = useState("");

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

  const onClick = (value: any) => {
    console.log("value", value);
    setCurTime(value);
  };

  return (
    <Self>
      <StyleTimePicker
        list={timeList}
        placeHolder="시간 선택"
        onClick={onClick}
        currentValue={curTime}
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
