import { Outlet } from "react-router";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { ThemeProvider } from "./provider/ThemeProvider";

function App() {
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
