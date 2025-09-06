import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import { FAQs } from "@/pages/FAQ";
import Feature from "@/pages/Feature";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Pricing from "@/pages/Pricing";
import Register from "@/pages/Register";
import { generateRoutes } from "@/utils/generateRoutes";

import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebar";
import { userSidebarItems } from "./userSidebar";
import { agentSidebarItems } from "./agentSidebar";
import NotFoundPage from "@/components/NotFound";
import Profile from "@/pages/Profile";
import { withAuth } from "@/utils/withAuth";
import { ROLE } from "@/constants";
import type { TRole } from "@/types";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "features",
        Component: Feature,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "pricing",
        Component: Pricing,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "faq",
        Component: FAQs,
      },
    ],
  },
  {
    path: "/admin",
    Component: withAuth(DashboardLayout, ROLE.ADMIN as TRole),
    children: [
      { index: true, element: <Navigate to="/admin/overview" /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    path: "/admin",
    Component: withAuth(DashboardLayout, ROLE.SUPER_ADMIN as TRole),
    children: [
      { index: true, element: <Navigate to="/admin/overview" /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    path: "/agent",
    Component: withAuth(DashboardLayout, ROLE.AGENT as TRole),
    children: [
      { index: true, element: <Navigate to="/agent/overview" /> },
      ...generateRoutes(agentSidebarItems),
    ],
  },
  {
    path: "/user",
    Component: withAuth(DashboardLayout, ROLE.USER as TRole),
    children: [
      { index: true, element: <Navigate to="/user/overview" /> },
      ...generateRoutes(userSidebarItems),
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/profile",
    Component: withAuth(Profile),
  },
  {
    path: "*",
    Component: NotFoundPage,
  }
]);
