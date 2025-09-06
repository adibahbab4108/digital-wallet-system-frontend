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
      invalidatesTags: ["WALLET"],
    }),
    sendMoney: build.mutation({
      query: (info) => {
        console.log(info);
        return { url: "/wallet/send-money", method: "POST", data: info };
      },
      invalidatesTags: ["WALLET"],
    }),
    withdrawMoney: build.mutation({
      query: ({ agentEmail, amount }) => ({
        url: "/wallet/withdraw",
        method: "POST",
        data: { agentEmail, amount },
      }),
      invalidatesTags: ["WALLET"],
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

export const {
  useAddMoneyMutation,
  useSendMoneyMutation,
  useWithdrawMoneyMutation,
  useGetMyWalletQuery,
} = walletApi;
