import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // login: build.mutation({
    //   query: (loginInfo) => ({
    //     url: "/user/",
    //     method: "POST",
    //     body: loginInfo,
    //   }),
    // }),
    userInfo: build.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      providesTags:["USER"]
    }),

  }),
});

export const { useUserInfoQuery } = userApi;
