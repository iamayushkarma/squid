import type { ApiUser } from "@/types/user";

type UserListProps = {
  user: ApiUser;
  onClick?: () => void;
};

// UserList.tsx
function UserList({ user, onClick }: UserListProps) {
  return (
    <div className="grid grid-cols-[25%_25%_20%_15%_15%] px-7 py-4 hover:bg-gray-100 dark:hover:bg-background/40 transition">
      {/* Name */}
      <div className="flex items-center gap-3">
        <div className="size-10 bg-[#f1f5f9] dark:bg-[#404040] text-sm font-bold rounded-full flex justify-center items-center dark:text-text-secondary text-text-secondary-light">
          {user?.name[0]}
        </div>
        <div>
          <div className="dark:text-text-primary text-text-primary-light">
            {user?.name}
          </div>
          <div className="dark:text-text-secondary text-text-secondary-light">
            {`@${user?.username}`}
          </div>
        </div>
      </div>
      {/* email */}
      <div className="flex items-center">
        <div className="dark:text-text-secondary text-text-secondary-light">
          {user?.email}
        </div>
      </div>
      {/* Company */}
      <div className="flex items-center">
        <div className="dark:text-text-secondary text-text-secondary-light">
          {user?.company.name}
        </div>
      </div>
      {/* City */}
      <div className="flex items-center">
        <div className="dark:text-text-secondary text-text-secondary-light">
          {user?.address.city}
        </div>
      </div>
      {/* View More Button */}
      <div className="flex items-center">
        <button
          onClick={onClick}
          className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition"
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default UserList;
