import styled, { css } from 'styled-components';
import RenderList from '../../common/map/DynamicRender';
import { calculateMaxTime, calculateMinTime, adjustSelectability, generateTimeArray } from '../../../util/time';

import { Dropdown, DropdownMenu, DropdownToggle, DropdownOption } from '../../common/UI/dropdown/Dropdown';
import { Time } from '../../../@types/calendar';

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

	const handleClickTime = (value: string) => {
		handleTimePicker(value);
	};

	const renderOption = (time: Time) => {
		const result = filterTime ? filterTime(time) : true;

		return (
			<div key={time.value} onClick={() => handleClickTime(time.value)}>
				<Option value={time.label} disabled={!time.selectable || !result} />
			</div>
		);
	};

	return (
		<Self>
			<Dropdown>
				<Toggle disabled={!selectable}>{selectedTime || placeHolder}</Toggle>
				<Menu>
					<RenderList data={timeList} renderItem={renderOption} />
				</Menu>
			</Dropdown>
		</Self>
	);
};

export default TimePicker;

const Self = styled.div`
	padding: 0.5rem;
	position: absolute;
	width: 100%;
	font-family: ${(props) => props.theme.fonts.pretend};
`;

const Toggle = styled(DropdownToggle)<{ disabled: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 4.5rem;
	max-height: 56px;
	padding: 16px 12px 16px 16px;
	background-color: #3ab96f;
	color: white;
	border: 1px solid rgba(38, 45, 57, 0.08);
	font-size: 1.2rem;
	box-sizing: border-box;
	line-height: 22px;
	user-select: none;
	border-radius: 4px;

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
`;

const Option = styled(DropdownOption)<{ disabled: boolean }>`
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

	&:hover {
		background-color: #dddddd;
	}
`;
