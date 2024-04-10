import { TMassageDetail, TMassageTable } from '../../@types/massage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores/store';
import { setSelectedMassageType } from '../../stores/massageSlice';
import { addTabNum } from '../../stores/tabSlice';
import { addComma } from '../../util/price';
import CardImage from '../common/UI/Card/CardImage';
import CardContent from '../common/UI/Card/CardContent';
import CommonButton from '../common/UI/Button/CommonButton';

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
		<>
			<CardImage image={massage.image} alt={massage.displayItem} />
			<CardContent
				title={massage.displayItem}
				subTitle={`(${detail.time}분)`}
				content={addComma(detail.price)}
				fontSize="1.2rem"
				textAlign="left"
			/>
			<CommonButton
				type="round"
				onClickButton={() => setAvailableTime(detail.time)}
				$border={'2px solid #D3D3D3'}
				$padding="0.6rem"
			>
				선택하기
			</CommonButton>
		</>
	);
};

export default BookingDetail;
