import { Outlet } from "react-router-dom";
import Sidebar from "@/dashboard/layout/Sidebar";
import Topbar from "@/dashboard/layout/Topbar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}
