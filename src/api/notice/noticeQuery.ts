import { generate_notice } from "..";
import { NOTICE_CATEGORY_KEYS, TNotice } from "../../@types/notice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const noticeApi = createApi({
  reducerPath: "noticeApi",
  baseQuery: fetchBaseQuery({ baseUrl: generate_notice }),
  endpoints: (builder) => ({
    getNoticeList: builder.query<TNotice[], NOTICE_CATEGORY_KEYS>({
      query: (category) =>
        category === "ALL" ? "/" : `/?category=${category}`,
    }),
  }),
});

export const { useGetNoticeListQuery } = noticeApi;
