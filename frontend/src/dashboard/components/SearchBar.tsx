import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative w-64">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Search by name or email..."
        className="bg-background-secondary-light placeholder:text-[13.5px] w-full pl-10 px-4 py-2 rounded-md dark:bg-background border border-border-light dark:border-white/10"
      />
      <Search className="absolute size-5 left-2 top-3" />
    </div>
  );
}
export { SearchBar };
