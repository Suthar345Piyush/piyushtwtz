"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ThemeToggle() {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-700" />
    );
  }



  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors flex items-center justify-center shadow-lg border border-gray-700 dark:border-gray-600"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (

        <FiSun className="w-5 h-5 text-yellow-400" />

      ) : (

        <FiMoon className="w-5 h-5 text-gray-300" />
        
      )}
    </motion.button>
  );
}