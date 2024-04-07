import styled from 'styled-components';
import MyOrderSummary from './MyOrderSummary';

const MyOrderDetail = () => {
	return (
		<LayoutStyle>
			<HeaderStyle>‖ 예약 상세</HeaderStyle>
			<MyOrderSummary />
		</LayoutStyle>
	);
};

export default MyOrderDetail;

const LayoutStyle = styled.div`
	padding: 1rem;
	width: 70%;
	font-family: 'Pretendard-Regular';

	@media only screen and (max-width: ${(props) => props.theme.devise.bigNotebookWidth}) {
		width: 100%;
	}
`;

const HeaderStyle = styled.h2`
	font-size: 1.5rem;
`;
