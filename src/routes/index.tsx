import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import AgentOverview from "@/pages/Agent/AgentOverview";
import Contact from "@/pages/Contact";
import { FAQs } from "@/pages/FAQ";
import Feature from "@/pages/Feature";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Pricing from "@/pages/Pricing";
import Register from "@/pages/Register";
import UserOverview from "@/pages/User/UserOverview";
import { generateRoutes } from "@/utils/generateRoutes";

import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebar";

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
    Component: DashboardLayout,
    children: [...generateRoutes(adminSidebarItems)],
  },
  {
    path: "/agent",
    Component: DashboardLayout,
    children: [
      {
        path: "overview",
        Component: AgentOverview,
      },
    ],
  },
  {
    path: "/user",
    Component: DashboardLayout,
    children: [
      {
        path: "overview",
        Component: UserOverview,
      },
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
]);
