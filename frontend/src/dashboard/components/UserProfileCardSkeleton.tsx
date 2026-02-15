function UserProfileCardSkeleton() {
  return (
    <div className="p-5 w-44 rounded-lg bg-background-light dark:bg-background-secondary border border-border-light dark:border-border-dark animate-pulse">
      {/* Icon skeleton */}
      <div className="p-2 bg-[#eeedfd] dark:bg-[#1f2d47] rounded-lg w-10 h-10"></div>

      {/* Content skeleton */}
      <div className="mt-5 space-y-3">
        {/* Title skeleton */}
        <div className="h-4 w-20 bg-gray-300 dark:bg-white/10 rounded"></div>

        {/* Value skeleton */}
        <div className="h-9 w-16 bg-gray-300 dark:bg-white/10 rounded"></div>
      </div>
    </div>
  );
}

export default UserProfileCardSkeleton;
