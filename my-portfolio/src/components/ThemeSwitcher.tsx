import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
      document.documentElement.classList.add(systemTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove(theme!);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-theme-blue dark:text-theme-red"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <SunIcon size={24} /> : <MoonIcon size={24} />}
    </button>
  );
};

export default ThemeSwitcher;
