import { useGetOrderListQuery } from '../../../api/orders/ordersQuery';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOrderType } from '../../../@types/mypage/orders';
import { MY_ORDER_TABLE_HEADER } from '../../../const/mypage';

import styled from 'styled-components';
import MyOrderItem from './MyOrderItem';
import Paging from '../../common/pagination/Paging';
import FetchWithLoading from '../../common/UI/loading/FetchWithLoading';
import DynamicRender from '../../common/map/DynamicRender';

const MY_ORDER_LIST_PAGESIZE = 5;

const MyOrderList = () => {
	const navigate = useNavigate();
	const [page, setPage] = useState(1);

	const { data, error, isLoading } = useGetOrderListQuery({
		pageSize: MY_ORDER_LIST_PAGESIZE,
		pageNumber: page,
	});

	if (error && 'message' in error) {
		return <ErrorStyle>{error.message}</ErrorStyle>;
	}

	const orderList = data?.orders || [];
	const meta = data?.meta || { currentPage: 0, nextPage: 0, prevPage: 0, totalCount: 0 };

	const handlerMenuPage = (page: number) => {
		setPage(page);
		navigate(`/mypage/order/?page=${page}`);
	};

	const renderOrderItem = (item: TOrderType) => <MyOrderItem key={item.id} order={item} />;
	const renderTableHeader = (title: string) => <TableHeader key={title}>{title}</TableHeader>;

	return (
		<Self>
			<TitleStyle>‖ 예약 내역</TitleStyle>

			<HeaderLayoutStyle>
				<DynamicRender data={MY_ORDER_TABLE_HEADER} renderItem={renderTableHeader} />
			</HeaderLayoutStyle>

			<ContentLayoutStyle>
				<FetchWithLoading isLoading={isLoading}>
					<DynamicRender data={orderList} renderItem={renderOrderItem} />
				</FetchWithLoading>
			</ContentLayoutStyle>
			<Paging
				count={meta.totalCount}
				changePageHandler={handlerMenuPage}
				page={page}
				pageSize={MY_ORDER_LIST_PAGESIZE}
			/>
		</Self>
	);
};

export default MyOrderList;

const Self = styled.div`
	padding: 0.5rem;
	width: 100%;
`;

const TitleStyle = styled.h2`
	font-family: ${(props) => props.theme.fonts.pretend};
	font-size: 1.5rem;
`;

const ContentLayoutStyle = styled.div`
	display: flex;
	flex-direction: column;
`;
const ErrorStyle = styled.div`
	color: tomato;
	margin: 2rem auto;
	font-size: 24px;
	text-align: center;
`;

const HeaderLayoutStyle = styled.div`
	display: flex;
	flex-direction: row;
	border-top: 2px solid black;
	border-bottom: 1px solid lightgrey;
	padding: 1rem;
	margin-top: 1rem;
	text-align: center;
	justify-content: space-between;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		display: none;
	}
`;

const TableHeader = styled.div`
	width: 100%;
`;
