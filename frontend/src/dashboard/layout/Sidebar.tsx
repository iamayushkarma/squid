import LightLogo from "/svg/light-logo.svg";
import DarkLogo from "/svg/dark-logo.svg";
import { useTheme } from "@/hooks/useTheme";
import { LayoutDashboard, User, Settings, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";

const SideBarLinks = [
  {
    titel: "Dashboard",
    link: "/dashboard",
    logo: <LayoutDashboard className="size-5.5" />,
  },
  {
    titel: "Users",
    link: "users",
    logo: <User className="size-5.5" />,
  },
  {
    titel: "Setting",
    link: "settings",
    logo: <Settings className="size-5.5" />,
  },
];

function Sidebar() {
  const { theme } = useTheme();
  const { logout } = useAuthContext();

  const lightTheme = theme === "light";
  return (
    <section className="h-svh relative border-r border-r-border-light dark:border-border-dark ">
      <div className="border-b border-border-light dark:border-border-dark py-5 px-3">
        {/* Logo */}
        <div className="py-4 px-3 flex items-center gap-3">
          {!lightTheme ? (
            <img src={LightLogo} className="size-8 " />
          ) : (
            <img src={DarkLogo} className="size-8" />
          )}
          <h2 className="font-semibold text-2xl text-[#313139] dark:text-text-primary">
            Squid
          </h2>
        </div>
        {/* Dashboard links */}
        <div className="flex gap-2 flex-col mt-8 ">
          {SideBarLinks.map((item, index) => (
            <div
              className="hover:bg-gray-300 dark:hover:bg-background/50 rounded-lg transition-all duration-150 px-3 py-2"
              key={index}
            >
              <NavLink
                className={({ isActive }) =>
                  `flex gap-2 items-center text-sm  ${
                    isActive
                      ? "text-text-primary-light dark:text-text-primary font-semibold"
                      : "text-text-secondary-light dark:text-text-secondary"
                  }`
                }
                to={item.link}
                end
              >
                <span className="">{item.logo}</span>
                <span className="text-sm">{item.titel}</span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      {/* Logout button */}
      <div
        onClick={logout}
        className="flex items-center absolute bottom-0 p-4 gap-2 text-red-500"
      >
        <LogOut className="size-5" />
        <button className="text-sm">Logout</button>
      </div>
    </section>
  );
}

export default Sidebar;
