import { baseApi } from "@/redux/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateAgentApproval: build.mutation({
      query: ({ agentId, agentStatus }) => ({
        url: `/admin/agent/${agentId}/update-approval`,
        method: "PATCH",
        data: {agentStatus},
      }),
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
        url: "/admin/transactions",
        method: "GET",
        params: params,
      }),
      providesTags: ["ADMIN"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetAllAgentsQuery,
  useGetAllTransactionsQuery,
  useUpdateAgentApprovalMutation
} = adminApi;
