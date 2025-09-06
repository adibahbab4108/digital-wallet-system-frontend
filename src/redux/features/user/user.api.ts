import { baseApi } from "@/redux/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userInfo: build.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
  }),
});

export const { useUserInfoQuery } = userApi;
