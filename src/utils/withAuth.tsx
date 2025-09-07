import { useUserInfoQuery } from "@/redux/features/user/user.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return function AuthWrapper() {
    const { data, isLoading } = useUserInfoQuery(undefined);
    
    if (isLoading) return <div>Loading...</div>;


    if (!isLoading && !data?.data?.email) {
      return <Navigate to="/login" />;
    }
    if (requiredRole && !isLoading && data?.data?.role !== requiredRole) {
      return <Navigate to="/unauthorized" />;
    }
    return <Component />;
  };
};
