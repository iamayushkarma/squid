interface LoadingSkeletonProps {
  className?: string;
}

function LoadingSkeleton({ className = "" }: LoadingSkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-background-secondary rounded ${className}`}
    />
  );
}

export default LoadingSkeleton;
