import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [],
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
]);
