import { baseApi } from "@/redux/baseApi";

const transactionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyTransaction: build.query({
      query: (params) => ({
        url: "/transaction/my-transaction",
        method: "GET",
        params,
      }),
      providesTags: ["TRANSACTION"],
    }),
  }),
});

export const { useGetMyTransactionQuery } = transactionApi;
