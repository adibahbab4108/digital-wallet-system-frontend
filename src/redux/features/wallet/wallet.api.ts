import { baseApi } from "@/redux/baseApi";

const walletApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addMoney: build.mutation({
      query: ({ amount }) => {
        console.log("Payload before sending to API:", amount);
        return {
          url: "/wallet/add-money",
          method: "POST",
          data: { amount },
        };
      },
      invalidatesTags:["WALLET"]
    }),
    getMyWallet: build.query({
      query: () => ({
        url: "/wallet/my-wallet",
        method: "GET",
      }),
      providesTags: ["WALLET"],
    }),
  }),
});

export const { useAddMoneyMutation, useGetMyWalletQuery } = walletApi;
