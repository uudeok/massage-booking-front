import styled from "styled-components";
import React from "react";
import theme from "../../../styles/theme";
import { filterTimeRange, generateTimeArray } from "../../../util/time";
import RenderList from "../../common/map/RenderList";

type TimePickerType = {
  timeInterval: number;
  minTime?: string;
  maxTime?: string;
  excludeTime?: string[];
};

const TimePicker = ({
  timeInterval,
  minTime,
  maxTime,
  excludeTime,
}: TimePickerType) => {
  let timeIntervalList = generateTimeArray(timeInterval);

  if (minTime && maxTime) {
    timeIntervalList = filterTimeRange(timeIntervalList, minTime, maxTime);
  }

  const renderTimeList = (interval: string) => (
    <Option key={interval}>{interval}</Option>
  );

  return (
    <Self>
      <Select>
        <option>시간 선택</option>
        <RenderList data={timeIntervalList} renderItem={renderTimeList} />
      </Select>
    </Self>
  );
};

export default React.memo(TimePicker);

const Self = styled.div`
  padding: 0.5rem;
`;

const Select = styled.select`
  width: 90%;
  padding: 0.6rem;
  font-family: ${theme.fonts.pretend};
  font-size: 16px;
  cursor: pointer;
`;

const Option = styled.option`
  font-size: 18px;
`;
