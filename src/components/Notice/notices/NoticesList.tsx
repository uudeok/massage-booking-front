import styled from 'styled-components';
import NoticeItem from './NoticeItem';
import Paging from '../../Common/pagination/Paging';
import RenderList from '../../Common/map/DynamicRender';
import { NOTICE_CATEGORIES } from '../../../const/notices';
import { useState } from 'react';
import { NOTICE_CATEGORY_KEYS } from '../../../@types/notice';
import { useGetNoticeListQuery } from '../../../api/notice/noticeQuery';
import { TNoticeCategory } from '../../../@types/notice';

const NOTICE_LIST_PAGE_SIZE = 10;

const NoticesList = () => {
	const [category, setCategory] = useState<NOTICE_CATEGORY_KEYS>();
	const [page, setPage] = useState(1);

	const { data, isLoading } = useGetNoticeListQuery({
		pageNumber: page,
		pageSize: NOTICE_LIST_PAGE_SIZE,
		category: category,
	});

	const noticeList = data?.notices || [];
	const meta = data?.meta || { totalCount: 0 };

	const changePageHandler = (page: number) => {
		setPage(page);
	};

	const changeCategoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCategory(e.target.value as NOTICE_CATEGORY_KEYS);
	};

	const renderCategoryItem = (category: TNoticeCategory) => (
		<option key={category.key} id={category.key} value={category.key}>
			{category.value}
		</option>
	);

	return (
		<ContainerStyle>
			<InnerBoxStyle>
				<HeaderStyle>
					<TitleStyle>📢공지사항</TitleStyle>
					<CategoryListStyle onChange={changeCategoryHandler}>
						<option value="">전체</option>
						<RenderList data={NOTICE_CATEGORIES} renderItem={renderCategoryItem} />
					</CategoryListStyle>
				</HeaderStyle>
				<NoticeItem notice={noticeList} isLoading={isLoading} />
				<Paging
					page={page}
					changePageHandler={changePageHandler}
					count={meta.totalCount}
					pageSize={NOTICE_LIST_PAGE_SIZE}
				/>
			</InnerBoxStyle>
		</ContainerStyle>
	);
};

export default NoticesList;

const ContainerStyle = styled.div`
	display: flex;
	flex-direction: column;
	font-family: ${(props) => props.theme.fonts.pretend};
`;

const InnerBoxStyle = styled.div`
	width: 65rem;
	margin: auto;
	padding: 3rem;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		width: 21rem;
		padding: 1rem;
	}
`;

const HeaderStyle = styled.div`
	display: flex;
	padding: 1rem;
	margin-top: 3rem;
	border-bottom: 2px solid black;
`;

const TitleStyle = styled.h1`
	font-size: 2rem;
	flex: 1;

	@media only screen and (max-width: ${(props) => props.theme.devise.tabletWidth}) {
		font-size: 1.5rem;
	}
`;

const CategoryListStyle = styled.select`
	width: 5rem;
	height: 2rem;
	display: flex;
	color: black;
`;
