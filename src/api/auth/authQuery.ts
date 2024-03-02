import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserType } from "../../@types/user";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}`,
  }),
  tagTypes: ["login"],
  endpoints: (builder) => ({
    getToken: builder.mutation<UserType, string>({
      query: (code) => ({
        url: "/auth/kakao",
        method: "POST",
        body: { code },
      }),
      transformResponse: (response: { user: UserType }) => {
        return response.user;
      },
      invalidatesTags: [{ type: "login" }], // 로그인 상태를 업데이트하는 경우 캐시를 무효화합니다.
    }),
  }),
});

export const { useGetTokenMutation } = authApi;
