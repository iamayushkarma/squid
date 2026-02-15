import { useUsers } from "@/hooks/useUsers";
import { Link } from "react-router-dom";
import StatCard from "@/dashboard/components/StatCard";
import StatCardSkeleton from "@/dashboard/components/StatCardSkeleton";
import UserTableSkeleton from "@/dashboard/components/UserTableSkeleton";

export default function DashboardHome() {
  const { users, loading, error } = useUsers();

  // Calculate stats
  const totalUsers = users.length;
  const uniqueCompanies = new Set(users.map((user) => user.company.name)).size;
  const uniqueCities = new Set(users.map((user) => user.address.city)).size;
  const totalWebsites = users.filter((user) => user.website).length;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-text-primary mb-2">
          Dashboard
        </h1>
        <p className="text-text-secondary">
          Welcome back! Here's your overview
        </p>
      </div>

      {/* Error State */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {loading ? (
          <>
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
          </>
        ) : (
          <>
            <StatCard title="Total Users" value={totalUsers} icon="👥" />
            <StatCard title="Companies" value={uniqueCompanies} icon="🏢" />
            <StatCard title="Cities" value={uniqueCities} icon="🌍" />
            <StatCard title="Websites" value={totalWebsites} icon="🌐" />
          </>
        )}
      </div>

      {/* Users Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-text-primary">
            Recent Users
          </h2>
          <Link
            to="/dashboard/users"
            className="text-text-primary hover:underline text-sm"
          >
            View all →
          </Link>
        </div>

        {loading ? (
          <UserTableSkeleton />
        ) : (
          <div className="space-y-4">
            {users.slice(0, 5).map((user) => (
              <div
                key={user.id}
                className="bg-background-secondary p-4 rounded-lg hover:bg-background transition-colors"
              >
                <h3 className="font-semibold text-text-primary text-lg">
                  {user.name}
                </h3>
                <p className="text-text-secondary text-sm">@{user.username}</p>
                <p className="text-text-secondary text-sm">{user.email}</p>
                <p className="text-text-secondary text-sm mt-2">
                  {user.company.name} • {user.address.city}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
