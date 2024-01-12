import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import RenderList from "../map/RenderList";
import { SlArrowDown } from "react-icons/sl";
import theme from "../../../styles/theme";

export type TDropDownItem = {
  label: string;
  value: string | number;
};

export type TDropDownProps = {
  disabled?: boolean;
  list: TDropDownItem[];
  onClick: (value: any) => void;
  currentValue?: string | number;
  placeHolder: string;
};

const DropDown = ({
  disabled = false,
  list,
  onClick,
  currentValue,
  placeHolder,
}: TDropDownProps) => {
  const [isFolded, setIsFolded] = useState(true);

  const handleClick = (e: React.MouseEvent) => {
    setIsFolded((prev) => !prev);
  };

  const handleClickValue = (value: string | number) => {
    onClick(value);
    setIsFolded(true);
  };

  const renderLisItem = (item: TDropDownItem) => (
    <Option key={item.value} onClick={() => handleClickValue(item.value)}>
      {item.label}
    </Option>
  );

  return (
    <Self>
      <TopListItem
        disabled={disabled}
        isFolded={isFolded}
        onClick={handleClick}
      >
        {currentValue ? currentValue : placeHolder}
        {/* <Icon /> */}
      </TopListItem>

      {!isFolded && (
        <List>
          <RenderList data={list} renderItem={renderLisItem} />
        </List>
      )}
    </Self>
  );
};

export default DropDown;

const Icon = styled(SlArrowDown)`
  width: 3rem;
  font-size: 13px;
`;

const Self = styled.div`
  cursor: pointer;
  z-index: 100;
  position: relative;
  /* label : DropDown; */
`;

const TopListItem = styled.ul<{ disabled: boolean; isFolded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.8rem;
  max-height: 56px;
  padding: 16px 12px 16px 16px;
  background-color: #f8f8f8;
  border: 1px solid rgba(38, 45, 57, 0.08);
  font-size: 1.2rem;
  box-sizing: border-box;
  line-height: 22px;
  user-select: none;
  border-radius: 4px;
  font-family: ${theme.fonts.pretend};

  ${({ disabled, isFolded }) =>
    isFolded && disabled
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
  max-height: 25rem;
  background-color: #f8f8f8;
  border-top: none;
  box-sizing: border-box;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  font-family: ${theme.fonts.pretend};
`;

const Option = styled.div`
  height: 4rem;
  font-size: 1.2rem;
  background-color: #f8f8f8;
  text-align: left;
  padding: 8px 16px;
  cursor: pointer;
  line-height: 36px;
  user-select: none;
  box-sizing: border-box;
  border-left: 1px solid rgba(38, 45, 7, 0.08);
  border-right: 1px solid rgba(38, 45, 7, 0.08);
  /* label : DropDownItme; */
`;