import { BOOKING_ITEM_KEYS, TMassageTable } from '../../@types/massage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores/store';
import { setSelectedMassageItem } from '../../stores/massageSlice';
import { addTabNum } from '../../stores/tabSlice';
import styled from 'styled-components';
import CardImage from '../common/UI/card/CardImage';
import CardContent from '../common/UI/card/CardContent';
import Card from '../common/UI/card/Card';

type TProps = {
	massage: TMassageTable;
};

const BookingMassageItem = ({ massage }: TProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const selectMassageItem = (massageItem: BOOKING_ITEM_KEYS) => {
		dispatch(setSelectedMassageItem(massageItem));
		dispatch(addTabNum());
	};

	return (
		<Layout>
			<CardImage image={massage.image} alt={massage.displayItem} />
			<Contents>
				<Title>{massage.displayItem}</Title>
				<div>{massage.content}</div>
			</Contents>
			<Button onClick={() => selectMassageItem(massage.item)}>선택하기</Button>
		</Layout>
	);
};

export default BookingMassageItem;

const Layout = styled(Card)`
	width: 500px;
	height: 500px;
	margin: 40px;
	display: flex;
	flex-direction: column;
	background-color: whitesmoke;
	box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.1);

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		width: 360px;
		height: 450px;
		margin: 10px;
		margin-top: 3rem;
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.mobileWidth}) {
		width: 335px;
		height: 400px;
		margin: 15px;
		margin-top: 3rem;
	}
`;

const Contents = styled(CardContent)`
	padding: 1rem;
	flex: 1;
`;

const Title = styled.div`
	font-size: 23px;
	font-weight: bold;
	margin-bottom: 1.5rem;
`;

const Button = styled.button`
	padding: 0.6rem;
	font-size: 15px;
	width: 100%;
	background-color: ${(props) => props.theme.palette.greenDk};
	color: white;
	border: none;
	min-height: 45px;

	&:hover {
		background-color: ${(props) => props.theme.palette.greenLg};

		color: white;
	}
`;
