import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { makeSimpleMonth } from '../../util/date';

import React from 'react';
import theme from '../../styles/theme';
import styled from 'styled-components';

type TCalendarHeader = {
	curMonth: number;
	curYear: number;
	setCurYear: React.Dispatch<React.SetStateAction<number>>;
	setCurMonth: React.Dispatch<React.SetStateAction<number>>;
	minDate?: Date;
	maxDate?: Date;
};

const CalendarHeader = ({ curMonth, curYear, setCurYear, setCurMonth, minDate, maxDate }: TCalendarHeader) => {
	const handlePrevController = () => {
		if (!minDate) return true;
		const minMonth = minDate.getMonth();

		return curMonth > minMonth;
	};
	const handleNextController = () => {
		if (!maxDate) return true;
		const maxMonth = maxDate.getMonth();

		return curMonth < maxMonth;
	};

	const handlePrevButton = (e: React.MouseEvent) => {
		// <--! 부모 컴포넌트에서 클릭 이벤트 핸들러가 있을때, 전파를 막아주어 충돌을 방지할 수 있다 --!>
		e.stopPropagation();

		if (curMonth === 0) {
			setCurYear(curYear - 1);
			setCurMonth(11);
		} else {
			setCurMonth(curMonth - 1);
		}
	};

	const handleNextButton = (e: React.MouseEvent) => {
		e.stopPropagation();

		if (curMonth === 11) {
			setCurYear(curYear + 1);
			setCurMonth(0);
		} else {
			setCurMonth(curMonth + 1);
		}
	};

	const isVisiblePrevBtn = handlePrevController();
	const isVisibleNextBtn = handleNextController();

	return (
		<Header>
			<ControllerButton onClick={handlePrevButton} $isVisible={isVisiblePrevBtn}>
				<SlArrowLeft />
			</ControllerButton>
			<Title>
				{curYear}년 {makeSimpleMonth(curMonth)}월
			</Title>
			<ControllerButton onClick={handleNextButton} $isVisible={isVisibleNextBtn}>
				<SlArrowRight />
			</ControllerButton>
		</Header>
	);
};

export default React.memo(CalendarHeader);

const Header = styled.span`
	display: flex;
	line-height: 38px;
	font-size: 1.6rem;
	position: relative;
	text-transform: uppercase;
	justify-content: center;
	margin-bottom: 3.1rem;
	width: 100%;
`;

const ControllerButton = styled.button<{ $isVisible: boolean }>`
	cursor: ${({ $isVisible }) => ($isVisible ? 'pointer' : 'default')};
	display: flex;
	align-items: center;
	background-color: transparent;
	border: none;
	font-size: 25px;
	visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
`;

const Title = styled.span`
	width: 11rem;
	font-size: 18px;
	line-height: 22px;
	text-align: center;
	color: #262d39;
	display: flex;
	align-items: center;
	order: 0;
	flex-grow: 0;
	margin: 0px 2rem;
	justify-content: center;
	font-family: ${theme.fonts.pretend};
`;
