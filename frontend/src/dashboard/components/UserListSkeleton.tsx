function UserListSkeleton() {
  return (
    <div className="grid grid-cols-[30%_30%_20%_20%] px-7 py-4 animate-pulse">
      {/* Name */}
      <div className="flex items-center gap-3">
        <div className="size-10 bg-gray-300 dark:bg-white/10 rounded-full"></div>
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-300 dark:bg-white/10 rounded"></div>
          <div className="h-3 w-24 bg-gray-300 dark:bg-white/10 rounded"></div>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center">
        <div className="h-4 w-40 bg-gray-300 dark:bg-white/10 rounded"></div>
      </div>

      {/* Company */}
      <div className="flex items-center">
        <div className="h-4 w-28 bg-gray-300 dark:bg-white/10 rounded"></div>
      </div>

      {/* City */}
      <div className="flex items-center">
        <div className="h-4 w-20 bg-gray-300 dark:bg-white/10 rounded"></div>
      </div>
    </div>
  );
}

export default UserListSkeleton;
