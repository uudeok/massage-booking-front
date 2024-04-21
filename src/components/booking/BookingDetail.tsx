import { TMassageDetail, TMassageTable } from '../../@types/massage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores/store';
import { setSelectedMassageType } from '../../stores/massageSlice';
import { addTabNum } from '../../stores/tabSlice';
import { addComma } from '../../util/price';
import CardImage from '../common/UI/card/CardImage';
import CardContent from '../common/UI/card/CardContent';
import Card from '../common/UI/card/Card';
import styled from 'styled-components';

type TProps = {
	detail: TMassageDetail;
	massage: TMassageTable;
};

const BookingDetail = ({ detail, massage }: TProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const setAvailableTime = (time: number) => {
		dispatch(setSelectedMassageType(time));
		dispatch(addTabNum());
	};

	return (
		<Layout>
			<CardImage image={massage.image} alt={massage.displayItem} />
			<Contents>
				<Title>
					{massage.displayItem} ({detail.time}분)
				</Title>
				<Price>{addComma(detail.price)}</Price>
			</Contents>
			<Button onClick={() => setAvailableTime(detail.time)}>선택하기</Button>
		</Layout>
	);
};

export default BookingDetail;

const Layout = styled(Card)`
	width: 500px;
	height: 500px;
	margin: 40px;
	display: flex;
	flex-direction: column;
	background-color: whitesmoke;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

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

const Price = styled.div`
	font-weight: bold;
	font-size: 22px;
`;
