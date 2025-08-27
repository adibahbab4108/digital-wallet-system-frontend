import AdminOverview from "@/pages/Admin/AdminOverview";
import ManageAgents from "@/pages/Admin/ManageAgents";
import ManageUsers from "@/pages/Admin/ManageUsers";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    // url: "#",
    items: [
      {
        title: "Overview",
        url: "/admin/overview",
        component: AdminOverview,
      },
      {
        title: "Manage Users",
        url: "/admin/manage-users",
        component: ManageUsers,
      },
      {
        title: "Manage Agents",
        url: "/admin/manage-agents",
        component: ManageAgents,
      },
    ],
  },
  {
    title: "Action",
    // url: "#",
    items: [],
  },
];
