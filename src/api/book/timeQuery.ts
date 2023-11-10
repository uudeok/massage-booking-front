import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { generate_time } from "..";
import { TTimeTable } from "../../@types/book";

export const timeApi = createApi({
  reducerPath: "timeApi",
  baseQuery: fetchBaseQuery({ baseUrl: generate_time }),
  tagTypes: ["time"],
  endpoints: (builder) => ({
    getAvailableTimeList: builder.query<TTimeTable[], string>({
      query: (date) => `/?date=${date}`,
      providesTags: [{ type: "time" }],
      keepUnusedDataFor: 5,
      /// 해당 데이터는 수시로 바뀌므로 캐쉬를 단 5초만 줬다.
    }),
    updateAvailableTimeList: builder.mutation<TTimeTable[], any>({
      query: ({ id, body }) => {
        return {
          url: `/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: [{ type: "time" }],
    }),
  }),
});

export const {
  useGetAvailableTimeListQuery,
  useUpdateAvailableTimeListMutation,
} = timeApi;
