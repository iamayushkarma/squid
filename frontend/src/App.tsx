import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import SignUpPage from "@/pages/SignUpPage";
import LoginPage from "@/pages/LoginPage";
import ProtectedRoute from "@/routes/ProtectedRoute";
import DashboardLayout from "@/dashboard/layout/DashboardLayout";
import DashboardHome from "@/dashboard/pages/DashboardHome";
import PageNotFound from "@/pages/PageNotFound";
import Users from "@/dashboard/pages/Users";
import Settings from "@/dashboard/pages/Settings";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
