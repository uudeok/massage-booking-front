import styled from 'styled-components';
import DynamicRender from '../common/map/DynamicRender';

import { Link } from 'react-router-dom';
import { useGetNoticeListQuery } from '../../api/notice/noticeQuery';
import { makeSimpleDate } from '../../util/date';
import { TNoticeDetail } from '../../@types/notice';

const NoticeMain = () => {
	const { data } = useGetNoticeListQuery({
		pageNumber: 1,
		pageSize: 5,
		// 최신순 5개만 가져옴
	});

	const noticeList = data?.notices || [];

	const renderNoticeItem = (item: TNoticeDetail) => (
		<NoticeStyle key={item.id}>
			<Title>
				<Link to={`/notice/${item.id}`}>{item.title}</Link>
			</Title>
			<Date>{makeSimpleDate(item.createdAt)}</Date>
		</NoticeStyle>
	);

	return (
		<Self>
			<HeaderStyle>
				<TitleStyle>알려드립니다</TitleStyle>
				<Link to="/notice">
					<div>목록보기</div>
				</Link>
			</HeaderStyle>
			<ContentStyle>
				<DynamicRender data={noticeList} renderItem={renderNoticeItem} />
			</ContentStyle>
		</Self>
	);
};

export default NoticeMain;

const Self = styled.div`
	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		padding: 0.5rem;
		width: 90%;
		margin: auto;
	}
`;

const HeaderStyle = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1rem;

	a {
		text-decoration: none;
		color: black;
	}

	a:hover {
		text-decoration: underline;
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		a {
			font-size: 0.8rem;
		}
	}
`;

const TitleStyle = styled.h1`
	font-size: 2rem;
	margin-bottom: 2rem;
	flex: 1;
	font-family: ${(props) => props.theme.fonts.gmarket};

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		font-size: 1.7rem;
	}
`;

const ContentStyle = styled.ul`
	border-top: 1px solid lightgrey;
	margin-bottom: 1rem;
`;

const NoticeStyle = styled.li`
	border-bottom: 1px solid lightgrey;
	padding: 1.2rem;
	display: flex;
`;

const Title = styled.span`
	flex: 1;

	a {
		text-decoration: none;
		color: black;
	}

	a:hover {
		text-decoration: underline;
	}

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		font-size: 0.9rem;
	}
`;

const Date = styled.div`
	color: ${(props) => props.theme.palette.grey};

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		font-size: 0.85rem;
	}
`;
