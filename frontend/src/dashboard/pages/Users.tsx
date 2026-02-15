import UserListSkeleton from "@/dashboard/components/UserListSkeleton";
import UserList from "@/dashboard/components/UserList";
import { useUsers } from "@/hooks/useUsers";
import { SearchButton } from "@/dashboard/components/SearchButton";
import { ArrowUpZA } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

function Users() {
  const { users, loading } = useUsers();
  const [isSortDropdownOpen, setisSortDropdownOpen] = useState(false);
  const listHeading = ["User", "Email", "Company Name", "City"];
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const dropDownRef = useRef<HTMLDivElement | null>(null);

  console.log("dropDownRef.current", dropDownRef.current);

  const filteredUsers = useMemo(() => {
    let result = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()),
    );

    if (sortOrder === "asc") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortOrder === "desc") {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [users, search, sortOrder]);

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
                <div className="text-sm relative">
                  Sort
                  {isSortDropdownOpen && (
                    <div className="absolute flex gap-2 flex-col w-36 -left-20 mt-2 bg-background-secondary-light dark:bg-background-secondary  border border-border-light dark:border-border-dark  shadow-lg rounded-md">
                      <div
                        onClick={() => setSortOrder("asc")}
                        className="hover:bg-gray-200 dark:hover:bg-background/50 px-2.5 py-1"
                      >
                        From A-Z
                      </div>

                      <div
                        onClick={() => setSortOrder("desc")}
                        className="hover:bg-gray-200 dark:hover:bg-background/50 px-2.5 py-1"
                      >
                        From Z-A
                      </div>
                    </div>
                  )}
                </div>
              </div>
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
          </>
        ) : filteredUsers.length === 0 ? (
          <div className="py-6 text-center text-text-secondary">
            No users found
          </div>
        ) : (
          filteredUsers.map((user) => <UserList key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}

export default Users;
