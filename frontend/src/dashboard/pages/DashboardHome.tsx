import UserProfileCard from "@/dashboard/components/UserProfileCard";
import { useUsers } from "@/hooks/useUsers";
import { User, Building2 } from "lucide-react";
import UserList from "@/dashboard/components/UserList";

const listHeading = ["User", "Email", "Company Name", "City"];
function DashboardHome() {
  const { users } = useUsers();

  const UserProfile = [
    {
      icon: <User className="text-blue-600" />,
      title: "Total Users",
      value: users.length,
    },
    {
      icon: <Building2 className="text-blue-600" />,
      title: "Total Companies",
      value: users.length,
    },
  ];
  console.log(users);

  return (
    <div className="h-full p-10 bg-background-secondary-light dark:bg-background overflow-hidden">
      {/* UserProfile card */}
      <div className="flex gap-3">
        {UserProfile.map((card, index) => (
          <div key={index}>
            <UserProfileCard
              icon={card.icon}
              title={card.title}
              value={card.value}
            />
          </div>
        ))}
      </div>
      {/* User list */}
      <div className="bg-background-light border border-border-light dark:border-border-dark dark:bg-background-secondary rounded-2xl mt-8">
        <div className="flex justify-between items-center px-7 py-4 text-text-primary-light dark:text-text-primary">
          <h3 className="text-lg font-semibold">Recent User</h3>
          <div className="text-sm font-medium">View all</div>
        </div>
        <div className="grid bg-background-secondary-light dark:bg-[#1c1c20] text-text-secondary border border-border-light dark:border-border-dark dark:text-text-secondary-light w-full grid-cols-[30%_30%_20%_20%] px-7 py-4">
          {listHeading.map((heading, index) => (
            <div className="uppercase text-sm font-medium" key={index}>
              {heading}
            </div>
          ))}
        </div>

        {users.slice(0, 3).map((user) => (
          <div key={user.id}>
            <UserList user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardHome;
