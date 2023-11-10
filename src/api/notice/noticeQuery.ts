import { generate_notice } from "..";
import { NOTICE_CATEGORY_KEYS, TNotice } from "../../@types/notice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const noticeApi = createApi({
  reducerPath: "noticeApi",
  baseQuery: fetchBaseQuery({ baseUrl: generate_notice }),
  tagTypes: ["notice"],
  endpoints: (builder) => ({
    getNoticeList: builder.query<TNotice[], NOTICE_CATEGORY_KEYS>({
      query: (category) =>
        category === "ALL" ? "/" : `/?category=${category}`,
    }),
    getLatestNoticeList: builder.query<TNotice[], void>({
      query: () => "/?_sort=date&_order=desc",
    }),
    getNoticeDetail: builder.query<TNotice, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const {
  useGetNoticeListQuery,
  useGetLatestNoticeListQuery,
  useGetNoticeDetailQuery,
} = noticeApi;
