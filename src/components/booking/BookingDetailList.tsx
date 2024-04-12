import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getMassageItem } from '../../stores/massageSlice';
import { useGetMassageItemQuery } from '../../api/massage/massageQuery';
import { TMassageDetail } from '../../@types/massage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores/store';
import { subTabNum } from '../../stores/tabSlice';
import ErrorDisplay from '../common/error/ErrorDisplay';
import styled from 'styled-components';
import CommonButton from '../common/UI/Button/CommonButton';
import RenderList from '../common/map/DynamicRender';
import BookingDetail from './BookingDetail';
import LoadingBar from '../common/UI/Loading/LoadingBar';

const BookingDetailList = () => {
	const dispatch = useDispatch<AppDispatch>();
	const massageItem = useSelector(getMassageItem);

	const { data: selectedMassage } = useGetMassageItemQuery(massageItem);

	if (!selectedMassage) return <LoadingBar />;
	if (selectedMassage === null) return <ErrorDisplay errorMessage="일시적인 오류가 발생했습니다" />;

	const renderDetailItem = (detail: TMassageDetail) => (
		<BookingDetail detail={detail} massage={selectedMassage} key={detail.time} />
	);

	return (
		<>
			<ButtonBoxStyle>
				<CommonButton type="plain" onClickButton={() => dispatch(subTabNum())}>
					뒤로가기
				</CommonButton>
			</ButtonBoxStyle>

			<ListBoxStyle>
				<RenderList data={selectedMassage.detail} renderItem={renderDetailItem} />
			</ListBoxStyle>
		</>
	);
};

export default BookingDetailList;

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

const ButtonBoxStyle = styled.div`
	margin-left: 2rem;
	width: 1100px;
	margin: auto;
`;
