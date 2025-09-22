'use client'
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-2 rounded border border-border-light dark:border-border-dark"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}