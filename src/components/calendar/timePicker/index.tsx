import styled from "styled-components";
import React from "react";
import theme from "../../../styles/theme";
import {
  calculateMaxTime,
  calculateMinTime,
  generateTimeArray,
} from "../../../util/time";
import DropDown, { TDropDownItem } from "../../common/dropdown";
import { useState } from "react";

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
  const [selectedTime, setSelectedTime] = useState("");

  let timeList: TDropDownItem[] = generateTimeArray(timeInterval);

  const onClick = (value: any) => {
    console.log(value);
    setSelectedTime(value);
  };

  if (minTime) {
    timeList = calculateMinTime(timeList, minTime);
  }

  if (maxTime) {
    timeList = calculateMaxTime(timeList, maxTime);
  }

  return (
    <Self>
      <StyleTimePicker
        list={timeList}
        placeHolder="시간 선택"
        onClick={onClick}
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
