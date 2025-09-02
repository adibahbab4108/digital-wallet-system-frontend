import { baseApi } from "@/redux/baseApi";

const agentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    something: build.mutation({
      query: ({ userId, walletStatus }) => ({
        url: `/admin/user/${userId}/update-wallet`,
        method: "PATCH",
        data: { walletStatus },
      }),
      invalidatesTags: ["ADMIN"],
    }),
    something: build.query({
      query: () => ({
        url: "/wallet/all-users",
        method: "GET",
      }),
      providesTags: ["ADMIN"],
    }),
  }),
});

export const {} = agentApi;
