import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = storedTheme || systemTheme;

    setTheme(initialTheme as "light" | "dark");
    document.documentElement.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="relative flex items-center">
      <SunIcon
        size={24}
        className={`absolute left-1 ${
          theme === "dark" ? "text-yellow-400" : "text-transparent"
        }`}
      />
      <MoonIcon
        size={24}
        className={`absolute right-1 ${
          theme === "light" ? "text-gray-300" : "text-transparent"
        }`}
      />
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <div
          className={`w-16 h-8 flex items-center rounded-full shadow-inner transition-colors duration-300 ease-in-out ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-200"
          }`}
        >
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out ${
              theme === "dark"
                ? "bg-gray-800 translate-x-8"
                : "bg-yellow-400 translate-x-0"
            }`}
          >
            {theme === "dark" ? (
              <MoonIcon size={18} className="text-white" />
            ) : (
              <SunIcon size={18} className="text-white" />
            )}
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
