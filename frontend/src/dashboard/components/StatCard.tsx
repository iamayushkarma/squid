interface StatCardProps {
  title: string;
  value: number | string;
  icon?: string;
}

function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="bg-background-secondary p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-text-secondary text-sm font-semibold">{title}</h3>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      <p className="text-text-primary text-3xl font-bold">{value}</p>
    </div>
  );
}

export default StatCard;
