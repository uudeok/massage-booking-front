import { BOOKING_ITEM_KEYS, TMassageTable } from '../../@types/massage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores/store';
import { setSelectedMassageItem } from '../../stores/massageSlice';
import { addTabNum } from '../../stores/tabSlice';
import styled from 'styled-components';
import CardImage from '../common/UI/card/CardImage';
import CardContent from '../common/UI/card/CardContent';
import Card from '../common/UI/card/Card';
import Button from '../common/UI/button/Button';

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
			<Button size="lg" role="plain" onClick={() => selectMassageItem(massage.item)}>
				선택하기
			</Button>
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
	font-family: ${(props) => props.theme.fonts.gmarket};
	line-height: 1.2;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		width: 360px;
		height: 450px;
		margin: 10px;
		margin-top: 3rem;
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.mobileWidth}) {
		width: 335px;
		height: 380px;
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
	margin-bottom: 1.2rem;
`;
