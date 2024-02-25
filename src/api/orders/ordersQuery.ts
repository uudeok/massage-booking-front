import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { generate_ORDERS } from "..";
import {
  MyOrderType,
  TDeleteType,
  TPostType,
} from "../../@types/mypage/orders";

// prepareheader

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: generate_ORDERS,
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
          // headers: {Authorization: `Bearer ${token}`}
        };
      },

      providesTags: [{ type: "orders" }],
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
  usePostOrderDataMutation,
  useDeleteOrderDataMutation,
} = ordersApi;
