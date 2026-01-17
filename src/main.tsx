import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App } from "./App.tsx";
import { QueryTools } from "./QueryTools.tsx";

const queryClient = new QueryClient();

const SHOW_DEV_TOOLS = false;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Suspended by something...</div>}>
        <App />
      </Suspense>
      {SHOW_DEV_TOOLS && (<QueryTools />)}
    </QueryClientProvider>
  </StrictMode>,
);
