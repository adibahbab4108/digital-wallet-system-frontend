import { Outlet } from "react-router";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import { ThemeProvider } from "./provider/ThemeProvider";
import { generateRoutes } from "./utils/generateRoutes";
import { adminSidebarItems } from "./routes/adminSidebar";

function App() {
  console.log(generateRoutes(adminSidebarItems))
  return (
    <>
      <ThemeProvider storageKey="vite-ui-theme">
        <MainLayout>
          <Outlet />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
