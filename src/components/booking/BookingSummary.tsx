import { addComma } from '../../util/price';
import { useSelector } from 'react-redux';
import { getMassageDetail, getSelectedMassageItem } from '../../stores/massageSlice';
import { addFewMinutes } from '../../util/time';
import { BOOKING_ITEM_VALUE } from '../../@types/massage';
import { makeSimpleDate } from '../../util/date';
import { useModal } from '../../hooks/useModal';
import ConditionalDisplay from '../common/maybe/ConditionalDisplay';
import BookingModal from '../modal/BookingModal';
import styled from 'styled-components';
import DynamicRender from '../common/map/DynamicRender';
import Button from '../common/UI/button/Button';

type TProps = {
	selectedDate: string;
	selectedTime: string;
	showModal: () => void;
};

type SummaryListType = {
	key: string;
	value: string | BOOKING_ITEM_VALUE | JSX.Element;
};

const BookingSummary = ({ selectedDate, selectedTime, showModal }: TProps) => {
	const massageItem = useSelector(getSelectedMassageItem);
	const massageDetail = useSelector(getMassageDetail);
	const selectedMassageTime = massageDetail[0].time;
	const selectedMassagePrice = massageDetail[0].price;
	const { isOpen: isBookingModalOpen, showModal: showBookingModal, closeModal: closeBookingModal } = useModal();

	const calculateEndTime = (selectedDate: string, selectedTime: string) => {
		const fullDate = `${selectedDate}T${selectedTime}:00`;
		const endTime = addFewMinutes(fullDate, selectedMassageTime);

		return endTime;
	};

	const endTime = calculateEndTime(selectedDate, selectedTime);
	const timeLabel = `${selectedTime}-${endTime} (${selectedMassageTime}분)`;

	const SUMMARY_LIST: SummaryListType[] = [
		{ key: '받으실 마사지', value: massageItem.displayItem },
		{ key: '받으실 날짜', value: makeSimpleDate(selectedDate) },
		{
			key: '받으실 시간',
			value: (
				<Button size="sm" role="round" onClick={() => showModal()}>
					{selectedTime ? timeLabel : '시간 선택 🕒'}
				</Button>
			),
		},
		{ key: '금액', value: addComma(selectedMassagePrice) },
	];

	const renderSummaryItem = (summaryItem: SummaryListType) => (
		<SummaryItemStyle key={summaryItem.key}>
			<KeyStyle>{summaryItem.key}</KeyStyle>
			<span>{summaryItem.value}</span>
		</SummaryItemStyle>
	);

	const handleReservation = () => {
		showBookingModal();
	};

	return (
		<SummaryBoxStyle>
			<ConditionalDisplay condition={isBookingModalOpen}>
				<BookingModal
					closeModal={closeBookingModal}
					massageItem={massageItem}
					selectedDate={selectedDate}
					massagePrice={selectedMassagePrice}
					startTime={selectedTime}
					endTime={endTime}
				/>
			</ConditionalDisplay>

			<TitleStyle>※ 예약 내역</TitleStyle>
			<SummaryListStyle>
				<DynamicRender data={SUMMARY_LIST} renderItem={renderSummaryItem} />
			</SummaryListStyle>
			<Button size="lg" role="round" onClick={handleReservation} disabled={!selectedTime}>
				예약하기
			</Button>
		</SummaryBoxStyle>
	);
};

export default BookingSummary;

const SummaryBoxStyle = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-right: 1rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		width: 85%;
		margin: auto;
		margin-top: 1rem;
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.bigMobileWidth}) {
		width: 100%;
	}
`;

const SummaryListStyle = styled.div`
	flex: 1;
	margin-bottom: 1rem;
`;

const SummaryItemStyle = styled.div`
	padding: 1rem;
	display: flex;

	@media only screen and (max-width: ${(props) => props.theme.devise.bigMobileWidth}) {
		font-size: 0.9rem;
		padding: 0.5rem;
	}
`;

const KeyStyle = styled.span`
	flex: 1;
	text-align: left;
	align-items: center;
	display: flex;
`;

const TitleStyle = styled.h2`
	font-size: 1.3rem;
	width: 100%;
	margin-bottom: 2rem;
	text-align: center;
`;
