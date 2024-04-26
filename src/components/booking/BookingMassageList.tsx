import styled from 'styled-components';
import BookingMassageItem from './BookingMassageItem';
import FetchWithLoading from '../common/UI/loading/FetchWithLoading';
import DynamicRender from '../common/map/DynamicRender';

import { useGetMassageListQuery } from '../../api/massage/massageQuery';
import { BOOKING_ITEM_KEYS, TMassageTable } from '../../@types/massage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores/store';
import { setSelectedMassageItem } from '../../stores/massageSlice';
import { addTabNum } from '../../stores/tabSlice';

const BookingMassageList = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { data: massageList = [], isLoading } = useGetMassageListQuery();

	const handleMassageItemSelection = (massageItem: BOOKING_ITEM_KEYS) => {
		dispatch(setSelectedMassageItem(massageItem));
		dispatch(addTabNum());
	};

	const renderMassageItem = (massage: TMassageTable) => (
		<BookingMassageItem
			key={massage.id}
			massage={massage}
			handleMassageItemSelection={handleMassageItemSelection}
		/>
	);

	return (
		<ContentBoxStyle>
			<ListBoxStyle>
				<FetchWithLoading isLoading={isLoading}>
					<DynamicRender data={massageList} renderItem={renderMassageItem} />
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
