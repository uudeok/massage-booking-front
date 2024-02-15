import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { generate_USERS } from "..";
import { UserType } from "../../@types/user";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: generate_USERS }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUser: builder.query<UserType, number>({
      query: (userId) => `/${userId}`,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
