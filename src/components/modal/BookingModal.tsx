import { useNavigate } from 'react-router-dom';

import { FcOk } from 'react-icons/fc';
import { usePostOrderDataMutation } from '../../api/orders/ordersQuery';
import { TMassageTable } from '../../@types/massage';
import { WEEK_DAYS } from '../../const/book/time';
import { BackDropStyle, ModalStyle } from '../common/UI/Modal/styles/modal.styles';

import styled from 'styled-components';
import LoadingBar from '../common/UI/Loading/LoadingBar';
import useDebounce from '../../hooks/useDebounce';
import { ModalWrapper, Header, Content, Button } from '../common/UI/Modal/ModalWrapper';

type TBookingModalType = {
	closeModal: () => void;
	massageItem: TMassageTable;
	selectedDate: string;
	massagePrice: number;
	startTime: string;
	endTime: string;
};

const BookingModal = ({
	closeModal,
	massageItem,
	selectedDate,
	massagePrice,
	startTime,
	endTime,
}: TBookingModalType) => {
	const [postOrder, { isLoading }] = usePostOrderDataMutation();
	const navigate = useNavigate();
	const fullStartDate = `${selectedDate}T${startTime}`;
	const fullEndDate = `${selectedDate}T${endTime}`;
	const selectedDay = new Date(selectedDate).getDay();
	const bookData = {
		order: {
			item: massageItem.displayItem,
			price: massagePrice,
			startReservedAt: fullStartDate,
			endReservedAt: fullEndDate,
		},
		event: {
			targetDate: selectedDate,
			startReservedTime: startTime,
			endReservedTime: endTime,
			dayOfWeek: WEEK_DAYS[selectedDay],
			itemId: massageItem.id,
			tutorId: -1,
		},
	};

	const debounceBookingData = useDebounce(bookData, 700);

	const bookMassageHandler = async () => {
		await postOrder(debounceBookingData);
		navigate('/mypage/order');
	};

	return (
		<>
			<BackDropStyle onClick={() => closeModal()} />
			<ModalStyle>
				<ModalWrapper>
					<ModalHeader>
						<FcOk />
					</ModalHeader>
					<ModalContent>예약을 진행하시겠습니까?</ModalContent>
					<CancelButton onClick={() => closeModal()}>취소하기</CancelButton>
					<ConfirmButton onClick={bookMassageHandler}>
						{isLoading ? <LoadingBar /> : '예약하기'}
					</ConfirmButton>
				</ModalWrapper>
			</ModalStyle>
		</>
	);
};

export default BookingModal;

const ModalHeader = styled(Header)`
	height: 30%;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		font-size: 3.5rem;
	}
`;

const ModalContent = styled(Content)`
	height: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.3rem;
`;

const CancelButton = styled(Button)`
	border: none;
	padding: 1rem;
	color: black;
	cursor: pointer;
	width: 40%;
	border-radius: 5px;
	margin-right: 1rem;
`;

const ConfirmButton = styled(Button)`
	border: none;
	padding: 1rem;
	background-color: ${(props) => props.theme.palette.confirm};
	color: white;
	cursor: pointer;
	width: 40%;

	&:hover {
		background-color: ${(props) => props.theme.palette.fluorGreen};
	}
`;
