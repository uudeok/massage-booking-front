import { useGetMassageListQuery } from '../../api/massage/massageQuery';
import { TMassageTable } from '../../@types/massage';
import styled from 'styled-components';
import BookingMassageItem from './BookingMassageItem';
import RenderList from '../common/map/DynamicRender';
import FetchWithLoading from '../common/UI/loading/FetchWithLoading';

const BookingMassageList = () => {
	const { data: massageList = [], isLoading } = useGetMassageListQuery();

	const renderBookingItem = (massage: TMassageTable) => <BookingMassageItem massage={massage} key={massage.id} />;

	return (
		<ContentBoxStyle>
			<ListBoxStyle>
				<FetchWithLoading isLoading={isLoading}>
					<RenderList data={massageList} renderItem={renderBookingItem} />
				</FetchWithLoading>
			</ListBoxStyle>
		</ContentBoxStyle>
	);
};

export default BookingMassageList;

const ContentBoxStyle = styled.div`
	display: flex;
`;

const ListBoxStyle = styled.ul`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	flex-wrap: wrap;
	width: 1200px;
	margin: auto;
	font-family: ${(props) => props.theme.fonts.pretend};
`;
