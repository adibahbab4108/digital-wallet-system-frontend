import { Outlet } from "react-router";

export default function AdminLayout() {
  return (
    <>
      <h1>Welcome to Admin Layout</h1>
      <Outlet />
    </>
  );
}
