import { baseApi } from "@/redux/baseApi";

const agentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addMoneyToUser: build.mutation({
      query: ({ receiverEmail, amount }) => ({
        url: `/agent/add-money-to-user`,
        method: "POST",
        data: { receiverEmail, amount },
      }),
      invalidatesTags: ["AGENT"],
    }),
    withdrawMoneyFromUser: build.mutation({
      query: ({ receiverEmail, amount }) => ({
        url: `/agent/withdraw-money-from-user`,
        method: "POST",
        data: { receiverEmail, amount },
      }),
      invalidatesTags: ["AGENT"],
    }),
    getAgentTransaction: build.query({
      query: () => ({
        url: "/agent/all-users",
        method: "GET",
      }),
      providesTags: ["AGENT"],
    }),
  }),
});

export const { useAddMoneyToUserMutation, useWithdrawMoneyFromUserMutation } =
  agentApi;
