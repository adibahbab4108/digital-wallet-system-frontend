import { baseApi } from "@/redux/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateAgentApproval: build.mutation({
      query: ({ agentId, agentStatus }) => ({
        url: `/admin/agent/${agentId}/update-approval`,
        method: "PATCH",
        data: {agentStatus},
      }),
      invalidatesTags: ["ADMIN"],
    }),
    updateUserWalletStatus: build.mutation({
      query: ({ userId, walletStatus }) => ({
        url: `/admin/user/${userId}/update-wallet`,
        method: "PATCH",
        data: {walletStatus},
      }),
       invalidatesTags: ["ADMIN"],
    }),
    getAllUsers: build.query({
      query: () => ({
        url: "/admin/all-users",
        method: "GET",
      }),
      providesTags: ["ADMIN"],
    }),
    getAllAgents: build.query({
      query: () => ({
        url: "/admin/all-agents",
        method: "GET",
      }),
      providesTags: ["ADMIN"],
    }),
    getAllTransactions: build.query({
      query: (params) => ({
        url: "/transaction/all",
        method: "GET",
        params: params,
      }),
      providesTags: ["ADMIN"],
    }),
    getAllWallet: build.query({
      query: () => ({
        url: "/admin/all-wallets",
        method: "GET",
      }),
      providesTags: ["ADMIN"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetAllAgentsQuery,
  useGetAllTransactionsQuery,
  useGetAllWalletQuery,
  useUpdateAgentApprovalMutation,
  useUpdateUserWalletStatusMutation
} = adminApi;
