import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    login: build.mutation({
      query: (loginInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: loginInfo,
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});
export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authApi;
