import { addComma } from '../../../util/price';
import { TOrderType } from '../../../@types/mypage/orders';
import { Link } from 'react-router-dom';
import { makeSimpleDate } from '../../../util/date';
import { makeSimpleTime } from '../../../util/time';
import styled from 'styled-components';

const MyOrderItem = ({ order }: { order: TOrderType }) => {
	const createdAt = makeSimpleDate(order.createdAt);
	const startDate = makeSimpleDate(order.startReservedAt);
	const startTime = makeSimpleTime(order.startReservedAt);
	const endTime = makeSimpleTime(order.endReservedAt);

	return (
		<Self>
			<OrderDateBoxStyle>
				<OrderDate>{createdAt}</OrderDate>
				<ViewDetails>
					<Link to={`${order.id}`}>상세보기</Link>
				</ViewDetails>
			</OrderDateBoxStyle>

			<OrderItem>{order.item}</OrderItem>

			<OrderDetail>
				<span>{startDate}</span>
				<span>
					{startTime} - {endTime}
				</span>
			</OrderDetail>

			<OrderPrice>{addComma(order.price)}</OrderPrice>
			<OrderStatus>
				<span>{order.displayStatus}</span>
			</OrderStatus>
		</Self>
	);
};

export default MyOrderItem;

const Self = styled.div`
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid lightgrey;
	padding: 1rem;
	text-align: center;
	font-family: 'Pretendard-Regular';
	justify-content: space-between;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		flex-direction: column;
		text-align: left;
		border-bottom: none;
	}
`;

const OrderDateBoxStyle = styled.div`
	/* width: 20%; */
	gap: 0.5rem;
	display: flex;
	flex-direction: column;
	width: 100%;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		width: 100%;
		padding: 0.5rem;
		border-top: 1px solid lightgrey;
		border-bottom: 1px solid lightgrey;
		flex-direction: row;
		gap: 1rem;
	}
`;

const OrderDate = styled.span`
	@media only screen and (max-width: ${(props) => props.theme.devise.bigMobileWidth}) {
		flex: 1;
		font-weight: bold;
	}
`;

const ViewDetails = styled.span`
	cursor: pointer;

	a {
		color: #2196f3;
	}

	&:hover {
		text-decoration: underline;
	}
`;

const OrderItem = styled.div`
	/* width: 20%; */
	width: 100%;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		padding: 0.5rem;
		width: 100%;
	}
`;

const OrderDetail = styled.div`
	/* width: 30%; */
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	/* gap: 0.5rem; */
	width: 100%;
	line-height: 1.2;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		padding: 0.5rem;
		width: 100%;
		/* flex-direction: row; */
		gap: 1rem;
	}
`;

const OrderPrice = styled.div`
	/* width: 15%; */
	width: 100%;
	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		padding: 0.5rem;
		width: 100%;
	}
`;

const OrderStatus = styled.div`
	/* width: 15%; */
	display: flex;
	justify-content: center;
	width: 100%;
	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		padding: 0.5rem;
		flex-direction: row;
		width: 100%;
		justify-content: left;
	}
`;
