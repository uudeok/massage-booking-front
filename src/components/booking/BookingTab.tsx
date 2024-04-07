import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currTabNum, resetTabNum } from '../../stores/tabSlice';
import BookingDate from './BookingDate';
import RenderList from '../common/map/DynamicRender';
import theme from '../../styles/theme';
import styled from 'styled-components';
import BookingMassageList from './BookingMassageList';
import BookingDetailList from './BookingDetailList';

type TabType = {
	key: string;
	content: JSX.Element;
	index: number;
};

const TAB_LIST = [
	{
		key: '마사지 선택',
		content: <BookingMassageList />,
		index: 0,
	},
	{
		key: '종류 선택',
		content: <BookingDetailList />,
		index: 1,
	},
	{
		key: '날짜 선택',
		content: <BookingDate />,
		index: 2,
	},
];

const BookingTab = () => {
	const dispatch = useDispatch();
	const tabNum = useSelector(currTabNum);

	useEffect(() => {
		return () => {
			dispatch(resetTabNum());
		};
	}, [dispatch]);

	const renderTabItem = (item: TabType) => (
		<TabButtonStyle key={item.index} disabled={item.index !== tabNum} $isActive={item.index === tabNum}>
			{item.key}
		</TabButtonStyle>
	);

	return (
		<>
			<TabListStyle>
				<RenderList data={TAB_LIST} renderItem={renderTabItem} />
			</TabListStyle>
			<ContentContainerStyle>{TAB_LIST[tabNum].content}</ContentContainerStyle>
		</>
	);
};

export default BookingTab;

const TabListStyle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	height: 5rem;
`;

const TabButtonStyle = styled.button<{ $isActive: boolean }>`
	width: 100%;
	height: 100%;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	font-size: 1.5rem;
	font-family: ${theme.fonts.gmarket};

	background-color: ${({ $isActive }) => ($isActive ? '#819977' : 'whitesmoke')};
	color: ${({ $isActive }) => ($isActive ? 'white' : 'grey')};
	font-weight: ${({ $isActive }) => ($isActive ? 'bold' : '')};
	box-shadow: ${({ $isActive }) => ($isActive ? '0 0 0.3rem 0 rgba(0, 0, 0, 0.2)' : '')};

	@media only screen and (max-width: ${theme.devise.notebookWidth}) {
		font-size: 1.2rem;
	}

	@media only screen and (max-width: ${theme.devise.tabletWidth}) {
		font-size: 0.8rem;
		width: 100%;
	}
`;

const ContentContainerStyle = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 3rem;
`;
