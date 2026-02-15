import { getUser } from "@/utils/auth";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigateTo = useNavigate();
  const user = getUser();
  return (
    <div className="text-text-primary-light dark:text-text-primary ">
      <div className="px-4 py-2 flex justify-between">
        <div>
          {/* Heading */}
          <h2
            onClick={() => navigateTo("/dashboard")}
            className="text-text-primary-light cursor-pointer dark:text-text-primary font-medium"
          >
            Dashboard
          </h2>
        </div>
        {/* user info */}
        <div
          onClick={() => navigateTo("/dashboard/settings")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div
            className="
            size-8 rounded-full flex items-center justify-center
            backdrop-blur-md
            border border-white/10
            bg-blue-500/70
            dark:bg-blue-400/20
            text-text-primary
            font-semibold
          "
          >
            {user?.name?.[0]}
          </div>

          <div>{user?.name}</div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
