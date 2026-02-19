import Topbar from "@/dashboard/layout/Topbar";
import Sidebar from "@/dashboard/layout/Sidebar";
import { Outlet } from "react-router-dom";
import { useUsers } from "@/hooks/useUsers";

function DashboardLayout() {
  const { users } = useUsers();

  return (
    <div className="flex text-text-primary h-svh bg-background-light dark:bg-background ">
      <div className="w-64 bg-background-light dark:bg-background h-svg">
        <Sidebar />
      </div>
      {/* Right section */}
      <div className="w-full flex flex-col flex-1">
        <div className="h-12.5 border-b border-b-border-light dark:border-border-dark bg-background-light dark:bg-background w-full">
          <Topbar />
        </div>
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
