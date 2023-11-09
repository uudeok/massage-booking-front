import { generate_massage } from "..";
import { TMassageTable } from "../../@types/massage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const massageApi = createApi({
  reducerPath: "massageApi",
  baseQuery: fetchBaseQuery({ baseUrl: generate_massage }),
  tagTypes: ["massage"],
  endpoints: (builder) => ({
    getMassageList: builder.query<TMassageTable[], void>({
      query: () => "/",
      providesTags: [{ type: "massage" }],
    }),
    getMassageItem: builder.query<TMassageTable, number>({
      query: (id) => `/${id}`,
      providesTags: [{ type: "massage" }],
    }),

    postMassageList: builder.mutation({
      query: (body) => {
        return {
          url: "/",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "massage" }],
    }),
  }),
});

export const { useGetMassageListQuery, useGetMassageItemQuery } = massageApi;

/// 나중에 어드민에서 마사지 리스트를 post, delete, patch 할때
/// invalidatesTags 의 type 을 getMassageList 와 동일한 type (massageList)로 주면
/// 해당 태그를 가진 데이터가 제거된다. 새로운 데이터로 변함
