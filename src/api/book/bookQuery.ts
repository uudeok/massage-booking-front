import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/events`,
  }),
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
