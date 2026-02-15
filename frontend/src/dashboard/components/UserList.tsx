import type { ApiUser } from "@/types/user";

type UserListProps = {
  user: ApiUser;
};

function UserList({ user }: UserListProps) {
  return (
    <div className=" grid grid-cols-[30%_30%_20%_20%] px-7 py-4 border-b border-border-light dark:border-border-dark">
      {/* Name */}
      <div className="flex items-center gap-3">
        <div className="size-10 bg-[#404040] text-sm font-bold rounded-full flex justify-center items-center">
          {user?.name[0]}
        </div>
        <div>
          <div>{user?.name}</div>
          <div className="dark:text-text-secondary text-text-secondary-light">
            {`@${user?.username}`}
          </div>
        </div>
      </div>
      {/* email */}
      <div className="flex items-center">
        {" "}
        <div className="dark:text-text-secondary text-text-secondary-light">
          {user?.email}
        </div>
      </div>
      {/* Company */}
      <div className="flex items-center">
        {" "}
        <div className="dark:text-text-secondary text-text-secondary-light">
          {user?.company.name}
        </div>
      </div>
      {/* City */}
      <div className="flex items-center">
        {" "}
        <div className="dark:text-text-secondary text-text-secondary-light">
          {user?.address.city}
        </div>
      </div>
    </div>
  );
}

export default UserList;
