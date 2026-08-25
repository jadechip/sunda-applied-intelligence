"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const nextTheme = !isDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("gradnorm-theme", nextTheme ? "dark" : "light");
    setIsDark(nextTheme);
  }

  return (
    <button
      type="button"
      className="grid size-9 place-items-center border border-zinc-300 bg-white text-zinc-600 shadow-sm transition hover:border-blue-600 hover:text-blue-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <Sun className="size-3.5" aria-hidden="true" /> : <Moon className="size-3.5" aria-hidden="true" />}
    </button>
  );
}
