import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetBookedTimeListQuery } from '../../api/book/bookQuery';
import { makeSimpleDate } from '../../util/date';
import { AppDispatch } from '../../stores/store';
import { subTabNum } from '../../stores/tabSlice';
import { useModal } from '../../hooks/useModal';
import { addFewMinutes, isTimeOverlaps, splitTimeArrays } from '../../util/time';
import { getMassageDetail } from '../../stores/massageSlice';
import { ORDER_ERROR_MESSAGE } from '../../const/book/errorMessage';
import styled from 'styled-components';
import CommonButton from '../common/button/CommonButton';
import ConditionalDisplay from '../common/maybe/ConditionalDisplay';
import CalendarModal from '../common/UI/modal/CalendarModal';
import BookingNotice from './BookingNotice';
import BookingSummary from './BookingSummary';

const BookingDate = () => {
	const dispatch = useDispatch<AppDispatch>();
	const selectedMassageDetail = useSelector(getMassageDetail);
	const selectedMassageTime = selectedMassageDetail[0].time;

	const { isOpen, showModal, closeModal } = useModal();

	const [date, setDate] = useState(new Date().toString());
	const [selectedTime, setSelectedTime] = useState('');
	const [isSelected, setIsSelected] = useState(false);

	const targetDate = makeSimpleDate(date);
	const timeInterval = 30;
	const { data: bookedData = [] } = useGetBookedTimeListQuery(targetDate);

	const spreadData = splitTimeArrays(bookedData, timeInterval);

	const handleReset = () => {
		setSelectedTime('');
		setIsSelected(false);
	};

	const isValidSelectedTime = (selectedTime: string) => {
		const fullDate = `${date}T${selectedTime}`;
		const endTime = addFewMinutes(fullDate, selectedMassageTime);
		const result = isTimeOverlaps(spreadData, selectedTime, endTime);

		if (result.length) {
			alert(ORDER_ERROR_MESSAGE.notice_overlap_time);
			handleReset();
		}
	};

	const isInvalidBusinessHour = (value: string) => {
		if (value === '19:30' && 90 < selectedMassageTime) {
			alert(ORDER_ERROR_MESSAGE.notice_over_time);
			handleReset();
		} else if (value === '20:00' && 60 < selectedMassageTime) {
			alert(ORDER_ERROR_MESSAGE.notice_over_time);
			handleReset();
		} else if (value === '20:30') {
			alert(ORDER_ERROR_MESSAGE.notice_available_time);
			handleReset();
		} else if (value === '21:00') {
			alert(ORDER_ERROR_MESSAGE.notice_business_time);
			handleReset();
		} else {
			return;
		}
	};

	const handleDatePicker = (date: string) => {
		setDate(date);
		setSelectedTime('');
	};

	const handleTimePicker = (value: string) => {
		setSelectedTime(value);

		// <--! 날짜 바뀔때마다 selectedTime 초기화하므로 handleTimePicker 함수가 실행됨 !-->
		if (value) {
			setIsSelected(true);
			isValidSelectedTime(value);
			isInvalidBusinessHour(value);
		} else {
			setIsSelected(false);
		}
	};

	return (
		<>
			<ConditionalDisplay condition={isOpen}>
				<CalendarModal
					closeModal={closeModal}
					onClick={handleDatePicker}
					value={date}
					bookedData={spreadData}
					handleTimePicker={handleTimePicker}
					selectedTime={selectedTime}
					isSelected={isSelected}
					timeInterval={timeInterval}
				/>
			</ConditionalDisplay>

			<ContainerStyle>
				<CommonButton type="plain" onClickButton={() => dispatch(subTabNum())}>
					뒤로가기
				</CommonButton>
				<TitleStyle>날짜와 시간을 선택해주세요</TitleStyle>
				<InnerBoxStyle>
					<LeftBoxStyle>
						<BookingSummary selectedDate={date} selectedTime={selectedTime} showModal={showModal} />
					</LeftBoxStyle>
					<BookingNotice />
				</InnerBoxStyle>
			</ContainerStyle>
		</>
	);
};

export default BookingDate;

const TitleStyle = styled.div`
	font-size: 2rem;
	text-align: center;
	margin-top: 1rem;
	margin-bottom: 1rem;
	border-bottom: 1px solid lightgrey;
	line-height: 1.2;
	font-family: ${(props) => props.theme.fonts.gmarket};
	cursor: pointer;

	@media only screen and (max-width: ${(props) => props.theme.devise.bigMobileWidth}) {
		font-size: 1.5rem;
		margin-top: 2rem;
	}
`;

const InnerBoxStyle = styled.div`
	display: flex;
	margin-top: 1rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		flex-direction: column;
	}
`;

const LeftBoxStyle = styled.div`
	width: 50%;
	text-align: center;
	margin-right: 1rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.notebookWidth}) {
		width: 100%;
	}
`;

const ContainerStyle = styled.div`
	display: flex;
	flex-direction: column;
	width: 65rem;
	margin: 2rem auto;
	font-family: ${(props) => props.theme.fonts.pretend};

	@media only screen and (max-width: ${(props) => props.theme.devise.notebookWidth}) {
		width: 100%;
	}
`;
