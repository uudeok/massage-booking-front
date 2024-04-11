import styled, { css } from 'styled-components';
import RenderList from '../../common/map/DynamicRender';
import theme from '../../../styles/theme';

import { Dropdown, DropdownMenu, DropdownToggle, Option } from '../../common/UI/Dropdown/Dropdown';

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
	const handleClickTime = (value: string) => {
		handleTimePicker(value);
	};

	const renderOption = (time: Time) => {
		const result = filterTime ? filterTime(time) : true;

		return (
			<div key={time.value} onClick={() => handleClickTime(time.value)}>
				<DropdownOption value={time.label} disabled={!time.selectable || !result} />
			</div>
		);
	};

	return (
		<Self>
			<Dropdown>
				<Toggle disabled={!selectable}>{currentValue ? currentValue : placeHolder}</Toggle>
				<Menu>
					<RenderList data={list} renderItem={renderOption} />
				</Menu>
			</Dropdown>
		</Self>
	);
};

export default DropDown;

const Self = styled.div`
	cursor: pointer;
	z-index: 100;
	position: relative;
`;

const Toggle = styled(DropdownToggle)<{ disabled: boolean }>`
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
	cursor: pointer;

	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.5;
		`}
`;

const Menu = styled(DropdownMenu)`
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

const DropdownOption = styled(Option)<{ disabled: boolean }>`
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
