// nikola tesla quote under about section

'use client';

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
        quote that inspire me to work more/.
      </h2>

      <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="font-sans italic">
          𝙸 𝚍𝚘𝚗&apos;𝚝 𝚌𝚊𝚛𝚎 𝚝𝚑𝚊𝚝 𝚝𝚑𝚎𝚢 𝚜𝚝𝚘𝚕𝚎 𝚖𝚢 𝚒𝚍𝚎𝚊, 𝙸 𝚌𝚊𝚛𝚎 𝚝𝚑𝚊𝚝 𝚝𝚑𝚎𝚢 𝚍𝚘𝚗&apos;𝚝 𝚑𝚊𝚟𝚎 𝚊𝚗𝚢 𝚘𝚏 𝚝𝚑𝚎𝚒𝚛 𝚘𝚠𝚗.
        </p>
        <p className="font-sans text-gray-500 dark:text-gray-500">~ 𝙽𝚒𝚔𝚘𝚕𝚊 𝚝𝚎𝚜𝚕𝚊</p>
      </div>
    </motion.section>
  );
}