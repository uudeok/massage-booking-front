import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserType } from "../../@types/user";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/users`,
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUser: builder.query<UserType, number>({
      query: (userId) => `/${userId}`,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
