import { NOTICE_CATEGORY_KEYS, NoticeType, TNoticeDetail } from '../../@types/notice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const onQueryStartedErrorToast = async (args: any, { queryFulfilled }: any) => {
// 	try {
// 		await queryFulfilled;
// 	} catch (error: any) {
// 		// handle error here, dispatch toast message

// 		console.log('abc', error);
// 		console.log(error.meta.response.status);
// 		throw error;
// 	}
// };

export const noticeApi = createApi({
	reducerPath: 'noticeApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_API_URL}/notice`,
	}),
	tagTypes: ['notice'],

	endpoints: (builder) => ({
		getNoticeList: builder.query<
			NoticeType,
			{ pageNumber: number; pageSize: number; category?: NOTICE_CATEGORY_KEYS }
		>({
			query: (arg) => {
				const { pageNumber, pageSize, category } = arg;
				return {
					url: '/',
					params: { pageNumber, pageSize, category },
				};
			},
			providesTags: [{ type: 'notice' }],
			// onQueryStarted: onQueryStartedErrorToast,
		}),
		getNoticeDetail: builder.query<TNoticeDetail, number>({
			query: (id) => `/${id}`,
		}),
	}),
});

export const { useGetNoticeListQuery, useGetNoticeDetailQuery } = noticeApi;
