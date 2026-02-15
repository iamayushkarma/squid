import { useState } from "react";
import { useUsers } from "@/hooks/useUsers";
import UserCard from "@/dashboard/components/users/UserCard";
import UserModal from "@/dashboard/components/users/UserModal";
import SearchBar from "@/dashboard/components/users/SearchBar";
import SortSelect from "@/dashboard/components/users/SortSelect";
import Pagination from "@/dashboard/components/users/Pagination";
import UserTableSkeleton from "@/dashboard/components/UserTableSkeleton";
import type { ApiUser } from "@/types/user";

export default function Users() {
  const { users, loading, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<ApiUser | null>(null);

  const itemsPerPage = 6;

  // Filter users by search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Sort users
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  // Paginate users
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = sortedUsers.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // Reset to page 1 when search changes
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-text-primary mb-2">Users</h1>
        <p className="text-text-secondary">Manage and view all users</p>
      </div>

      {/* Error State */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <SearchBar value={searchTerm} onChange={handleSearch} />
        <SortSelect value={sortOrder} onChange={setSortOrder} />
      </div>

      {/* Results Count */}
      {!loading && (
        <p className="text-text-secondary text-sm mb-4">
          Showing {paginatedUsers.length} of {filteredUsers.length} users
        </p>
      )}

      {/* Users Grid */}
      {loading ? (
        <UserTableSkeleton />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onClick={() => setSelectedUser(user)}
              />
            ))}
          </div>

          {/* No Results */}
          {paginatedUsers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-secondary">No users found</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}

      {/* User Detail Modal */}
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}
