import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

function SearchButton({ value, onChange }: Props) {
  return (
    <div className="relative w-64">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Search..."
        className="bg-background-secondary-light placeholder:text-sm w-full pl-12 px-4 py-2 rounded-md dark:bg-background"
      />
      <Search className="absolute left-2 top-2" />
    </div>
  );
}
export { SearchButton };
