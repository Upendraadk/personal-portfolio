import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="glass relative flex items-center justify-center w-11 h-11 rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary/10"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400 transition-all duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 transition-all duration-300" />
      )}
    </button>
  );
};