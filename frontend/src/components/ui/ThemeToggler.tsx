import { useTheme } from "@/hooks/useTheme";

function ThemeToggler() {
  const { toggleTheme } = useTheme();
  return (
    <button className="bg-blue-500 px-7 py-3 rounded-lg" onClick={toggleTheme}>
      Change theme
    </button>
  );
}

export default ThemeToggler;
