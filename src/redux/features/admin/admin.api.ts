import { baseApi } from "@/redux/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // login: build.mutation({
    //   query: (loginInfo) => ({
    //     url: "/user/",
    //     method: "POST",
    //     body: loginInfo,
    //   }),
    // }),
    getAllUsers: build.query({
      query: () => ({
        url: "/admin/all-users",
        method: "GET",
      }),
      providesTags:["ADMIN"]
    }),

  }),
});

export const { useGetAllUsersQuery } = adminApi;
