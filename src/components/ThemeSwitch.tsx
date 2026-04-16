'use client';

import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";


export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <div className="w-9 h-9 rounded-lg bg-background border border-[#2a2a2a] animate-pulse" />
  );

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="w-9 h-9 flex items-center justify-center rounded-lg bg-background border border-[#2a2a2a] text-foreground hover:text-foreground hover:border-gray-600 transition-all duration-200 cursor-pointer"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}