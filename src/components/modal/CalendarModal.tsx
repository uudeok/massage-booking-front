import { Time } from '../../@types/calendar';
import styled from 'styled-components';
import Calendar from '../calendar';
import dayjs from 'dayjs';
import { BackDropStyle } from '../common/UI/modal/styles/modal.styles';
import { Content, ModalWrapper } from '../common/UI/modal/ModalWrapper';
import Button from '../common/UI/button/Button';

export type TProps = {
	closeModal: () => void;
	onClick: (date: string) => void;
	value: string;
	bookedData?: string[];
	handleTimePicker: (value: string) => void;
	selectedTime: string;
	isSelected: boolean;
	timeInterval: number;
};

const SUNDAY = 0 as const;

const CalendarModal = ({
	closeModal,
	onClick,
	value,
	bookedData,
	handleTimePicker,
	selectedTime,
	isSelected,
	timeInterval,
}: TProps) => {
	const isOffDay = (date: string) => {
		const day = new Date(date).getDay();
		return day !== SUNDAY;
	};

	const filterPassedTime = (time: Time) => {
		const currentTime = new Date().getTime();
		const [year, month, day] = value.split('-').map((str) => Number(str));
		const [hour, minutes] = time.label.split(':').map((str) => Number(str));

		const selectTime = new Date(year, month - 1, day, hour, minutes).getTime();

		return currentTime < selectTime;
	};

	const laterOneMonth = dayjs(new Date()).add(1, 'month').toDate();

	return (
		<>
			<BackDropStyle onClick={() => closeModal()} />
			<ModalStyle>
				<ModalWrapper>
					<ModalContent>
						<Calendar
							onClick={onClick}
							minDate={new Date()}
							maxDate={laterOneMonth}
							curMonthOnly={true}
							value={value}
							filterDate={isOffDay}
							showTimePicker={true}
							timeInterval={timeInterval}
							minTime="09:00"
							maxTime="21:00"
							excludeTimes={bookedData}
							handleTimePicker={handleTimePicker}
							selectedTime={selectedTime}
							placeHolder="시간 선택"
							filterTime={filterPassedTime}
						/>
					</ModalContent>
					<ButtonWrapper>
						<Button onClick={() => closeModal()} size="lg" role="cancel">
							취소 하기
						</Button>
						<Button onClick={() => closeModal()} size="lg" role="round" disabled={!isSelected}>
							선택 완료
						</Button>
					</ButtonWrapper>
				</ModalWrapper>
			</ModalStyle>
		</>
	);
};

export default CalendarModal;

const ModalContent = styled(Content)`
	display: flex;
	justify-content: center;
	margin-top: 1.5rem;
	height: 85%;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	padding: 0.5rem;
`;

export const ModalStyle = styled.div`
	position: fixed;
	top: 3%;
	left: calc(50% - 11rem);
	width: 26rem;
	height: 40rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 30;
	animation: slide-down 300ms ease-out forwards;
	background-color: white;
	text-align: center;
	border-radius: 15px;
	overflow: hidden;

	@keyframes slide-down {
		from {
			opacity: 0;
			transform: translateY(-3rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		width: 24rem;
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.bigMobileWidth}) {
		width: 100%;
		left: 0;
	}
`;
