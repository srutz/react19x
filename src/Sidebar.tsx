import { memo } from "react";
import { useApplicationState } from "./useApplicationState";

export const Sidebar = memo(() => {
  const isSidebarOpen = useApplicationState((state) => state.isSidebarOpen);
  console.log("render sidebar");
  return <div>Sidebar-Open: {isSidebarOpen ? "open" : "closed"}</div>;
});
