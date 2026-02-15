import Skeleton from "@/dashboard/components/LoadingSkeleton";

function UserTableSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="bg-background-secondary p-4 rounded-lg">
          <Skeleton className="h-5 w-40 mb-2" />
          <Skeleton className="h-4 w-32 mb-1" />
          <Skeleton className="h-4 w-48" />
        </div>
      ))}
    </div>
  );
}

export default UserTableSkeleton;
