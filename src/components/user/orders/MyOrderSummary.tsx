import { useDeleteOrderDataMutation, useGetOrderDetailQuery } from '../../../api/orders/ordersQuery';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CommonButton from '../../common/UI/Button/CommonButton';
import theme from '../../../styles/theme';
import RenderList from '../../common/map/DynamicRender';
import LoadingBar from '../../common/UI/Loading/LoadingBar';
import { makeSimpleDate } from '../../../util/date';
import { addComma } from '../../../util/price';
import { makeSimpleTime } from '../../../util/time';
import OrderStatus from './OrderStatus';
import ConditionalDisplay from '../../common/maybe/ConditionalDisplay';

type OrderDetailType = {
	key: string;
	value: string;
};

const MyOrderSummary = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [deleteOrder, { error: deleteError }] = useDeleteOrderDataMutation();
	const { data: orderDetail, error } = useGetOrderDetailQuery(Number(id));

	if (error && 'message' in error) {
		return <ErrorStyle>{error.message}</ErrorStyle>;
	}

	if (!orderDetail) return <LoadingBar />;

	const cancelOrderHandler = async () => {
		const process = window.confirm('예약을 취소하시겠습니까?');
		if (process) {
			try {
				await deleteOrder(Number(id));
			} catch (error) {
				if (deleteError && 'message' in deleteError) {
					alert(deleteError.message);
				}
			} finally {
				navigate('/mypage/order');
			}
		}
	};

	const ORDER_DETAIL: OrderDetailType[] = [
		{ key: '예약한 마사지', value: orderDetail.item },
		{ key: '예약한 날짜', value: makeSimpleDate(orderDetail.startReservedAt) },
		{
			key: '예약한 시간',
			value: `${makeSimpleTime(orderDetail.startReservedAt)} - ${makeSimpleTime(orderDetail.endReservedAt)}`,
		},
		{ key: '금액', value: addComma(orderDetail.price) },
	];

	const renderOrderDetail = (orderDetail: OrderDetailType) => (
		<OrderItemBoxStyle key={orderDetail.key}>
			<KeyStyle>{orderDetail.key}</KeyStyle>
			<span>{orderDetail.value}</span>
		</OrderItemBoxStyle>
	);

	return (
		<>
			<HeaderStyle>
				<OrderedDateStyle>{makeSimpleDate(orderDetail.createdAt)} 예약</OrderedDateStyle>
				<ConditionalDisplay condition={orderDetail.status === 'PENDING'}>
					<CommonButton
						type="rectangle"
						onClickButton={cancelOrderHandler}
						width="6.5rem"
						color="grey"
						fontFamily={theme.fonts.pretend}
						$hoverColor="black"
					>
						예약 취소하기
					</CommonButton>
				</ConditionalDisplay>
			</HeaderStyle>

			<ContentBoxStyle>
				<RenderList data={ORDER_DETAIL} renderItem={renderOrderDetail} />
				<OrderStatus status={orderDetail.status} displayStatus={orderDetail.displayStatus} />
			</ContentBoxStyle>
		</>
	);
};

export default MyOrderSummary;

const HeaderStyle = styled.div`
	display: flex;
	flex-direction: row;
	border-top: 2px solid black;
	padding: 1rem;
	margin-top: 1rem;
`;

const OrderedDateStyle = styled.span`
	flex: 1;
`;

const ContentBoxStyle = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border-top: 1px solid lightgrey;
	border-bottom: 1px solid lightgrey;
`;

const OrderItemBoxStyle = styled.div`
	display: flex;
	padding: 0.5rem;
`;

const KeyStyle = styled.span`
	width: 16%;
	color: #555555;

	@media only screen and (max-width: ${(props) => props.theme.devise.bigMobileWidth}) {
		width: 40%;
	}
`;

const ErrorStyle = styled.div`
	color: tomato;
	margin: 2rem auto;
	font-size: 24px;
	text-align: center;
`;
