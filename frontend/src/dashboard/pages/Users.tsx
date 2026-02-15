import UserListSkeleton from "@/dashboard/components/UserListSkeleton";
import UserList from "@/dashboard/components/UserList";
import { useUsers } from "@/hooks/useUsers";
import { SearchButton } from "@/dashboard/components/SearchButton";
import { ArrowUpZA } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import Pagination from "@/dashboard/components/Pagination";

function Users() {
  const { users, loading } = useUsers();
  const [isSortDropdownOpen, setisSortDropdownOpen] = useState(false);
  const listHeading = ["User", "Email", "Company Name", "City"];
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  const PAGE_SIZE = 4;

  // Filter logic
  const filteredUsers = useMemo(() => {
    let result = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()),
    );

    if (sortOrder === "asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [users, search, sortOrder]);

  // Pagination - USE filteredUsers.length instead of users.length
  const numberOfPages = Math.ceil(filteredUsers.length / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const currentUsers = filteredUsers.slice(start, end);

  // Reset to first page when search or sort changes
  useEffect(() => {
    setCurrentPage(0);
  }, [search, sortOrder]);

  // Closes sorting popup on clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setisSortDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSortDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setisSortDropdownOpen((value) => !value);
  };

  const handleSortSelect = (order: "asc" | "desc") => {
    setSortOrder(order);
    setisSortDropdownOpen(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="h-full p-10 bg-background-secondary-light dark:bg-background select-none">
      <div className="bg-background-light border border-border-light dark:border-border-dark dark:bg-background-secondary rounded-2xl mt-8">
        <div className="flex justify-between items-center px-7 py-4 text-text-primary-light dark:text-text-primary">
          <h3 className="text-lg font-semibold">Recent User</h3>

          <div className="flex items-center gap-4">
            <SearchButton value={search} onChange={setSearch} />

            <div ref={dropDownRef} className="relative">
              <div
                onClick={toggleSortDropdown}
                className="flex items-center gap-1 cursor-pointer"
              >
                <ArrowUpZA className="size-4" />
                <div className="text-sm">Sort</div>
              </div>

              {isSortDropdownOpen && (
                <div className="absolute right-0 mt-2 flex flex-col w-36 bg-background-secondary-light dark:bg-background-secondary border border-border-light dark:border-border-dark shadow-lg rounded-md overflow-hidden z-10">
                  <button
                    onClick={() => handleSortSelect("asc")}
                    className="text-left hover:bg-gray-200 dark:hover:bg-background/50 px-2.5 py-2 text-sm"
                  >
                    From A-Z
                  </button>
                  <button
                    onClick={() => handleSortSelect("desc")}
                    className="text-left hover:bg-gray-200 dark:hover:bg-background/50 px-2.5 py-2 text-sm"
                  >
                    From Z-A
                  </button>
                </div>
              )}
            </div>
          </div>
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
        ) : filteredUsers.length === 0 ? (
          <div className="py-10 text-center text-text-secondary">
            No users found
          </div>
        ) : (
          currentUsers.map((user) => <UserList key={user.id} user={user} />)
        )}
      </div>

      {!loading && filteredUsers.length > 0 && (
        <Pagination
          totalPages={numberOfPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default Users;
