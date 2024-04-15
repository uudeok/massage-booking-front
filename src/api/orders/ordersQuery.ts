import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MyOrderType, TOrderType, TPostType } from '../../@types/mypage/orders';

export const ordersApi = createApi({
	reducerPath: 'ordersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_API_URL}/orders`,
		prepareHeaders: (headers) => {
			const token = localStorage.getItem('token');
			if (token) {
				headers.set('Authorization', `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ['orders'],

	endpoints: (builder) => ({
		getOrderList: builder.query<MyOrderType, { pageNumber: number; pageSize: number }>({
			query: (arg) => {
				const { pageNumber, pageSize } = arg;
				return {
					url: '/',
					params: { pageNumber, pageSize },
				};
			},
			transformErrorResponse: (error) => {
				return error.data;
			},
			providesTags: [{ type: 'orders' }],
		}),
		getOrderDetail: builder.query<TOrderType, number>({
			query: (id) => {
				return {
					url: `/${id}`,
				};
			},
			transformResponse: (response: { order: TOrderType }) => {
				return response.order;
			},
			transformErrorResponse: (error) => {
				return error.data;
			},
			providesTags: [{ type: 'orders' }],
		}),
		postOrderData: builder.mutation<TOrderType, TPostType>({
			query: (arg) => {
				const { event, order } = arg;
				return {
					url: '/',
					method: 'POST',
					body: { event: event, order: order },
				};
			},
			invalidatesTags: ['orders'],
		}),
		deleteOrderData: builder.mutation<{ orders: TOrderType }, number>({
			query: (id) => {
				return {
					url: `/${id}`,
					method: 'DELETE',
				};
			},
			transformErrorResponse: (error) => {
				return error.data;
			},
			invalidatesTags: ['orders'],
		}),
	}),
});

export const { useGetOrderListQuery, useGetOrderDetailQuery, usePostOrderDataMutation, useDeleteOrderDataMutation } =
	ordersApi;
