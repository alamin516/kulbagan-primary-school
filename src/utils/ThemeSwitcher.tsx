'use client'
import { Moon, Sun } from "lucide-react";
import useTheme from "next-theme";
import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="!cursor-pointer p-2  transition-all duration-300 z-[96]">
      {theme === "light" ? (
        <Moon
          className="!cursor-pointer h-6 w-6 dark:text-white animate-slideInFromTop"
          onClick={() => setTheme("dark")}
          aria-label="Toggle Dark Mode"
        />
      ) : (
        <Sun
          className="!cursor-pointer h-6 w-6 dark:text-white animate-slideInFromTop"
          onClick={() => setTheme("light")}
          aria-label="Toggle Light Mode"
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
