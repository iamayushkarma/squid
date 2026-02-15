interface SortSelectProps {
  value: "asc" | "desc";
  onChange: (value: "asc" | "desc") => void;
}

export default function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as "asc" | "desc")}
      className="px-4 py-3 bg-background-secondary border border-background text-text-primary rounded-lg focus:ring-2 focus:ring-text-secondary focus:border-text-secondary outline-none transition-all cursor-pointer"
    >
      <option value="asc">A → Z</option>
      <option value="desc">Z → A</option>
    </select>
  );
}
