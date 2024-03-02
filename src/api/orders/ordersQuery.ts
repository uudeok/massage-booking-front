import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  MyOrderType,
  TDeleteType,
  TPostType,
} from "../../@types/mypage/orders";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/orders`,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["orders"],
  endpoints: (builder) => ({
    getOrderList: builder.query<
      MyOrderType,
      { pageNumber: number; pageSize: number }
    >({
      query: (arg) => {
        const { pageNumber, pageSize } = arg;
        return {
          url: "/",
          params: { pageNumber, pageSize },
        };
      },

      providesTags: [{ type: "orders" }],
    }),
    getOrderDetail: builder.query({
      query: (id) => {
        return {
          url: `/${id}`,
        };
      },
    }),

    postOrderData: builder.mutation<any, TPostType>({
      query: (arg) => {
        const { event, order } = arg;
        return {
          url: "/",
          method: "POST",
          body: { event: event, order: order },
        };
      },
      invalidatesTags: ["orders"],
    }),
    deleteOrderData: builder.mutation<{ orders: TDeleteType }, number>({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },

      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useGetOrderListQuery,
  useGetOrderDetailQuery,
  usePostOrderDataMutation,
  useDeleteOrderDataMutation,
} = ordersApi;
