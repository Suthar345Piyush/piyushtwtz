'use client';

import { motion } from "framer-motion";
import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      if (email) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    }, 1000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mb-16 mt-16 px-5 sm:px-6"
    >
      <h2 className="text-3xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
        stay updated/.
      </h2>

      <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base mb-6">
        subscribe to my email list/.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={status === 'loading'}
          className="flex-1 px-4 py-3 text-sm bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 dark:focus:border-gray-500 transition-colors text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 w-full"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className={`
            w-full sm:w-auto
            px-5 py-3 rounded-xl
            text-sm font-bold whitespace-nowrap
            cursor-pointer transition-all duration-200
            ${status === 'success'
              ? 'bg-green-500 text-white'
              : status === 'error'
              ? 'bg-red-500 text-white'
              : 'bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-200 active:scale-95'}
            disabled:opacity-60 disabled:cursor-not-allowed
          `}
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Sending
            </span>
          ) : status === 'success' ? '✓ Subscribed!'
            : status === 'error' ? 'Try again'
              : 'Subscribe'}
        </button>
      </form>

      <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-2 h-5">
        {status === "success" && (
          <p className="text-green-500 text-sm">Thanks for subscribing!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-sm">Please enter a valid email.</p>
        )}
      </motion.div>
    </motion.section>
  );
}