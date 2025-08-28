import { baseApi } from "@/redux/baseApi";

const walletApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // login: build.mutation({
    //   query: (loginInfo) => ({
    //     url: "/user/",
    //     method: "POST",
    //     body: loginInfo,
    //   }),
    // }),
    getWallet: build.query({
      query: () => ({
        url: "/wallet/my-wallet",
        method: "GET",
      }),
      providesTags:["WALLET"]
    }),

  }),
});

export const { useGetWalletQuery } = walletApi;
