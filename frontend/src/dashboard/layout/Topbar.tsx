import { getUser } from "@/utils/auth";

function Topbar() {
  const user = getUser();
  return (
    <div className="text-text-primary-light dark:text-text-primary ">
      <div className="px-4 py-2 flex justify-between">
        <div>
          {/* Heading */}
          <h2 className="text-text-primary-light dark:text-text-primary font-medium">
            Dashboard
          </h2>
        </div>
        {/* user info */}
        <div className="flex items-center gap-2">
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
