import { generate_massage } from "..";
import { TMassageTable } from "../../@types/book";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const massageApi = createApi({
  reducerPath: "massageApi",
  baseQuery: fetchBaseQuery({ baseUrl: generate_massage }),
  endpoints: (builder) => ({
    getMassageList: builder.query<TMassageTable[], void>({
      query: () => "/",
    }),
  }),
});

export const { useGetMassageListQuery } = massageApi;
