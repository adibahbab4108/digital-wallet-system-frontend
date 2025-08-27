import { ROLE } from "@/constants/roles";
import { adminSidebarItems } from "@/routes/adminSidebar";
import { userSidebarItems } from "@/routes/userSidebar";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case ROLE.SUPER_ADMIN:
      return [...adminSidebarItems];
    case ROLE.ADMIN:
      return [...adminSidebarItems];
    case ROLE.USER:
      return [...userSidebarItems];
    default:
      return [];
  }
};
