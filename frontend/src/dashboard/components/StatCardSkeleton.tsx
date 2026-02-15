import Skeleton from "@/dashboard/components/LoadingSkeleton";

function StatCardSkeleton() {
  return (
    <div className="bg-background-secondary p-6 rounded-2xl">
      <Skeleton className="h-4 w-24 mb-3" />
      <Skeleton className="h-8 w-16" />
    </div>
  );
}

export default StatCardSkeleton;
