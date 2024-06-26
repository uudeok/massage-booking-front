import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserType } from '../../@types/user';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_API_URL}`,
		// baseUrl: 'https://api.naturalhealingspa.xyz',
	}),
	tagTypes: ['login'],
	endpoints: (builder) => ({
		getToken: builder.mutation<UserType, string>({
			query: (code) => ({
				url: '/auth/kakao',
				method: 'POST',
				body: { code },
			}),
			transformResponse: (response: { user: UserType }) => {
				return response.user;
			},
			transformErrorResponse: (error) => {
				return error.data;
			},
			invalidatesTags: [{ type: 'login' }],
		}),
	}),
});

export const { useGetTokenMutation } = authApi;
