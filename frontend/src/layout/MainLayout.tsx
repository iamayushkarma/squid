import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";

function MainLayout() {
  return (
    <>
      <div className="relative">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
