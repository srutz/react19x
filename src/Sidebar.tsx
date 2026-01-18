import { useApplicationState } from "./useApplicationState";

export const Sidebar = () => {
  const isSidebarOpen = useApplicationState((state) => state.isSidebarOpen);
  console.log("render sidebar");
  return <div>Sidebar-Open: {isSidebarOpen ? "open" : "closed"}</div>;
};
