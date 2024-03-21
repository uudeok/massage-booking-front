import React, { useState } from "react";
import styled, { css } from "styled-components";
import RenderList from "../../common/map/DynamicRender";
import theme from "../../../styles/theme";

export type Time = {
  label: string;
  value: string;
  selectable: boolean;
};

export type TDropDownProps = {
  list: Time[];
  handleTimePicker: (value: string) => void;
  currentValue: string | number;
  placeHolder?: string;
  selectable?: boolean;
  filterTime?: (time: Time) => boolean;
};

const DropDown = ({
  list,
  handleTimePicker,
  currentValue,
  placeHolder,
  selectable = false,
  filterTime,
}: TDropDownProps) => {
  const [isFolded, setIsFolded] = useState(true);

  const handleClick = (e: React.MouseEvent) => {
    setIsFolded((prev) => !prev);
  };

  const handleClickTime = (value: string) => {
    handleTimePicker(value);
    setIsFolded(true);
  };

  const renderLisItem = (time: Time) => {
    const result = filterTime ? filterTime(time) : true;

    return (
      <Option
        key={time.value}
        onClick={() => handleClickTime(time.value)}
        disabled={!time.selectable || !result}
      >
        {time.label}
      </Option>
    );
  };

  return (
    <Self>
      <TopListItem
        $isFolded={isFolded}
        onClick={handleClick}
        disabled={!selectable}
      >
        {currentValue ? currentValue : placeHolder}
      </TopListItem>

      {selectable && !isFolded && (
        <List>
          <RenderList data={list} renderItem={renderLisItem} />
        </List>
      )}
    </Self>
  );
};

export default DropDown;

const Self = styled.div`
  cursor: pointer;
  z-index: 100;
  position: relative;
`;

const TopListItem = styled.ul<{ $isFolded: boolean; disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.5rem;
  max-height: 56px;
  padding: 16px 12px 16px 16px;
  background-color: #3581ff;
  color: white;
  border: 1px solid rgba(38, 45, 57, 0.08);
  font-size: 1.2rem;
  box-sizing: border-box;
  line-height: 22px;
  user-select: none;
  border-radius: 4px;
  font-family: ${theme.fonts.pretend};

  ${({ disabled, $isFolded }) =>
    $isFolded && disabled
      ? css`
          border-radius: 4px;
        `
      : css`
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`;

const List = styled.ul`
  position: absolute;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 10rem;
  background-color: #f8f8f8;
  border-top: none;
  box-sizing: border-box;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  font-family: ${theme.fonts.pretend};
`;

const Option = styled.li<{ disabled: boolean }>`
  height: 3rem;
  font-size: 1.2rem;
  background-color: #f8f8f8;
  text-align: left;
  padding: 8px 16px;
  cursor: pointer;
  line-height: 30px;
  user-select: none;
  box-sizing: border-box;
  border-left: 1px solid rgba(38, 45, 7, 0.08);
  border-right: 1px solid rgba(38, 45, 7, 0.08);

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
      background-color: #dddddd;
    `}
`;
