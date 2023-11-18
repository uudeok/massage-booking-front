import { generate_NOTICE } from "..";
import {
  NOTICE_CATEGORY_KEYS,
  NoticeType,
  TNoticeDetail,
} from "../../@types/notice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const noticeApi = createApi({
  reducerPath: "noticeApi",
  baseQuery: fetchBaseQuery({ baseUrl: generate_NOTICE }),
  tagTypes: ["notice"],
  endpoints: (builder) => ({
    getNoticeList: builder.query<
      NoticeType,
      { pageNumber: number; pageSize: number; category?: NOTICE_CATEGORY_KEYS }
    >({
      query: (arg) => {
        const { pageNumber, pageSize, category } = arg;
        console.log(pageNumber, pageSize, category);

        return {
          url: "/",
          params: { pageNumber, pageSize, category },
        };
      },
    }),

    getNoticeDetail: builder.query<TNoticeDetail, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetNoticeListQuery, useGetNoticeDetailQuery } = noticeApi;
