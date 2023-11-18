import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { generate_ORDERS } from "..";
import { MyOrderType } from "../../@types/mypage/orders";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: generate_ORDERS }),
  tagTypes: ["orders"],
  endpoints: (builder) => ({
    getOrderList: builder.query<MyOrderType, void>({
      query: () => "/",
    }),
  }),
});

export const { useGetOrderListQuery } = ordersApi;
