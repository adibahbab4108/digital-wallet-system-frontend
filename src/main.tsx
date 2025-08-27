import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/index.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "sonner";
import { ThemeProvider } from "./provider/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
      <Toaster richColors />
    </ReduxProvider>
  </StrictMode>
);
