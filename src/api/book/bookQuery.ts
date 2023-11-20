import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { generate_EVENTS } from "..";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: generate_EVENTS }),
  tagTypes: ["book"],
  endpoints: (builder) => ({
    getBookedTimeList: builder.query<string[], string>({
      query: (date) => `/booked/?targetDate=${date}&tutorId=-1`,
      transformResponse: (response: { events: string[] }) => {
        return response.events;
      },
      providesTags: [{ type: "book" }],
      keepUnusedDataFor: 3,
    }),
  }),
});

export const { useGetBookedTimeListQuery } = bookApi;
