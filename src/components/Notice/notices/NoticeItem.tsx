import { TNoticeDetail } from '../../../@types/notice';
import { NOTICE_CATEGORY } from '../../../const/notices';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { makeSimpleDate } from '../../../util/date';
import NoticeHeader from './NoticeHeader';
import RenderList from '../../common/map/DynamicRender';
import FetchWithLoading from '../../common/UI/Loading/FetchWithLoading';

type TProps = {
	notice: TNoticeDetail[];
	isLoading: boolean;
};

const NoticeItem = ({ notice, isLoading }: TProps) => {
	const renderNoticeItem = (notice: TNoticeDetail) => (
		<ContentStyle key={notice.id}>
			<ContentSortStyle>{NOTICE_CATEGORY[notice.category]}</ContentSortStyle>
			<ContentTitleStyle>
				<Link to={`/notice/${notice.id}`}>{notice.title}</Link>
			</ContentTitleStyle>
			<ContentDateStyle>{makeSimpleDate(notice.createdAt)}</ContentDateStyle>
			<ContentViewStyle>{notice.viewCount}</ContentViewStyle>
		</ContentStyle>
	);

	return (
		<>
			<NoticeHeader />
			<ContentBoxStyle>
				<FetchWithLoading isLoading={isLoading}>
					<RenderList data={notice} renderItem={renderNoticeItem} />
				</FetchWithLoading>
			</ContentBoxStyle>
		</>
	);
};

export default NoticeItem;

const ContentBoxStyle = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
	text-align: center;
`;

const ContentStyle = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		border-bottom: 1px solid lightgrey;
	}
`;

const ContentSortStyle = styled.div`
	width: 20%;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		display: none;
	}
`;

const ContentTitleStyle = styled.div`
	flex: 1;

	&:hover {
		text-decoration: underline;
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		text-align: left;
		font-size: 0.9rem;
	}
`;

const ContentDateStyle = styled.div`
	width: 10%;
	font-size: 0.8rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		text-align: right;
		width: 20%;
		font-size: 0.5rem;
	}
`;

const ContentViewStyle = styled.div`
	width: 10%;
	font-size: 0.8rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		display: none;
	}
`;
