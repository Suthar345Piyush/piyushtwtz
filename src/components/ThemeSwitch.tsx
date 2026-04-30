'use client';

import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-zinc-800 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className={`
        w-10 h-10 flex items-center justify-center rounded-full
        border shadow-md transition-all duration-300 cursor-pointer
        ${isDark
          ? 'bg-zinc-900 border-zinc-700 text-yellow-400 hover:border-zinc-500 hover:bg-zinc-800'
          : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
        }
      `}
    >
      {isDark
        ? <FiSun size={16} className="transition-transform duration-300 rotate-0 hover:rotate-12" />
        : <FiMoon size={16} className="transition-transform duration-300 rotate-0 hover:-rotate-12" />
      }
    </button>
  );
}