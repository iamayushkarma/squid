interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex-1">
      <input
        type="text"
        placeholder="Search by name or email..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-background-secondary border border-background text-text-primary rounded-lg focus:ring-2 focus:ring-text-secondary focus:border-text-secondary outline-none transition-all placeholder:text-text-secondary"
      />
    </div>
  );
}
