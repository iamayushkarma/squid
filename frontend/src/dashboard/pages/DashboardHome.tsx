import UserProfileCard from "@/dashboard/components/UserProfileCard";
import { useUsers } from "@/hooks/useUsers";
import { User, Building2, MapPinCheckInside, Globe } from "lucide-react";
import UserList from "@/dashboard/components/UserList";
import { Link } from "react-router-dom";
import UserProfileCardSkeleton from "@/dashboard/components/UserProfileCardSkeleton";
import UserListSkeleton from "@/dashboard/components/UserListSkeleton";

const listHeading = ["User", "Email", "Company Name", "City"];
function DashboardHome() {
  const { users, loading } = useUsers();

  const totalCompanies = new Set(users.map((user) => user.company.name)).size;
  const totalCities = new Set(users.map((user) => user.address.city)).size;
  const totalWebsites = users.filter((u) => u.website).length;
  const UserProfile = [
    {
      icon: <User className="text-blue-600" />,
      title: "Total Users",
      value: users.length,
    },
    {
      icon: <Building2 className="text-blue-600" />,
      title: "Total Companies",
      value: totalCompanies,
    },
    {
      icon: <MapPinCheckInside className="text-blue-600" />,
      title: "Total Locations",
      value: totalCities,
    },
    {
      icon: <Globe className="text-blue-600" />,
      title: "Connected Websites",
      value: totalWebsites,
    },
  ];
  console.log(users);

  return (
    <div className="h-full p-10 bg-background-secondary-light dark:bg-background">
      {/* UserProfile card */}
      <div className="flex gap-3">
        {loading ? (
          <>
            <UserProfileCardSkeleton />
            <UserProfileCardSkeleton />
            <UserProfileCardSkeleton />
            <UserProfileCardSkeleton />
          </>
        ) : (
          UserProfile.map((card, index) => (
            <div key={index}>
              <UserProfileCard
                icon={card.icon}
                title={card.title}
                value={card.value}
              />
            </div>
          ))
        )}
      </div>
      {/* User list */}
      <div className="bg-background-light border border-border-light dark:border-border-dark dark:bg-background-secondary rounded-2xl mt-8">
        <div className="flex justify-between items-center px-7 py-4 text-text-primary-light dark:text-text-primary">
          <h3 className="text-lg font-semibold">Recent User</h3>
          <Link to="users" className="text-sm font-medium">
            View all
          </Link>
        </div>

        <div className="grid bg-background-secondary-light dark:bg-[#1c1c20] text-text-secondary border border-border-light dark:border-border-dark dark:text-text-secondary-light w-full grid-cols-[30%_30%_20%_20%] px-7 py-4">
          {listHeading.map((heading, index) => (
            <div className="uppercase text-sm font-medium" key={index}>
              {heading}
            </div>
          ))}
        </div>

        {loading ? (
          <>
            <UserListSkeleton />
            <UserListSkeleton />
            <UserListSkeleton />
            <UserListSkeleton />
          </>
        ) : (
          users
            .slice(0, 3)
            .map((user) => <UserList key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}

export default DashboardHome;
