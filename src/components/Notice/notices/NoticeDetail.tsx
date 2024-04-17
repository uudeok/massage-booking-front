import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Notice from './Notice';
import { useGetNoticeDetailQuery } from '../../../api/notice/noticeQuery';
import theme from '../../../styles/theme';

const NoticeDetail = () => {
	const { id } = useParams();
	const { data: noticeDetail } = useGetNoticeDetailQuery(Number(id));

	return (
		<ContainerStyle>
			<InnerBoxStyle>
				<NoticeBoxStyle>
					<TitleStyle>공지사항</TitleStyle>
				</NoticeBoxStyle>
				{noticeDetail && <Notice detail={noticeDetail} />}
			</InnerBoxStyle>
		</ContainerStyle>
	);
};

export default NoticeDetail;

const ContainerStyle = styled.div`
	display: flex;
	flex-direction: column;
	font-family: ${theme.fonts.pretend};
`;

const InnerBoxStyle = styled.div`
	width: 65rem;
	margin: auto;
	padding: 3rem;

	@media only screen and (max-width: ${theme.devise.tabletWidth}) {
		width: 21rem;
		padding: 1rem;
	}
`;

const NoticeBoxStyle = styled.div`
	display: flex;
	padding: 1rem;
	margin-top: 3rem;
	border-bottom: 2px solid black;

	@media only screen and (max-width: ${theme.devise.tabletWidth}) {
		justify-content: center;
	}
`;

const TitleStyle = styled.h1`
	font-size: 2rem;

	@media only screen and (max-width: ${theme.devise.tabletWidth}) {
		font-size: 1.5rem;
	}
`;
