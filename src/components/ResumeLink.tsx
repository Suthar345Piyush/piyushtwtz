'use client';

import { motion } from "framer-motion";

export default function ResumeLink() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-10 mb-10"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">resume/.</h2>

      <a
        href="https://drive.google.com/file/d/1_wIm6NKyGgy8ZLs8CO6EYMbLN5C0wJD3/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-all duration-200 bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-200 active:scale-95"
      >
        📄 resume
      </a>
    </motion.section>
  );
}