'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { useState } from 'react';
import { ScrambleText } from "@/components/scramble-text";
import { AnimatedTextSlider } from "@/components/animated-text-slider";

export default function Hero() {
  const [isSwapped, setIsSwapped] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='mb-16 px-4 sm:px-6'
    >
      <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 md:gap-12 pb-4'>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='shrink-0'
        >
          <div
            onClick={() => setIsSwapped(prev => !prev)}
            className='relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-gray-300 dark:ring-zinc-800 shadow-xl hover:scale-100 active:scale-95 transition-transform duration-100 cursor-pointer'
          >
            <Image
              src="/images/ownphoto.jpg"
              alt="Profile"
              fill
              sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 160px"
              className={`object-cover object-top transition-opacity duration-500 ${isSwapped ? 'opacity-0' : 'opacity-100'}`}
              priority
            />
            <Image
              src="/images/folioimage.png"
              alt="Alternate"
              fill
              sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 160px"
              className={`object-cover object-top transition-opacity duration-500 ${isSwapped ? 'opacity-100' : 'opacity-0'}`}
              priority
            />
          </div>
        </motion.div>

        <div className='flex flex-col items-center sm:items-start text-center sm:text-left gap-3 pt-0 sm:pt-2'>

          <ScrambleText
            text="hi,i'm piyush/."
            className='cursor-pointer text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight'
          />

          <AnimatedTextSlider
            texts={["fullStack developer", "software developer", "tech nerd", "learning & building"]}
            className='text-gray-500 dark:text-gray-400 text-sm sm:text-base'
          />

          <div className='inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-mono bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-[#2a2a2a] rounded-xl mt-2'>
            <span className='w-2 h-2 shrink-0 rounded-full bg-green-400 shadow-[0_0_8px_#22c55e] animate-pulse' />
            <p className='text-gray-700 dark:text-[#e5e5e5] font-semibold tracking-tight m-0'>
              <span className='hidden sm:inline'>available - open to freelance projects and SDE roles</span>
              <span className='sm:hidden'>available - open to freelance projects and SDE roles</span>
            </p>
          </div>
        </div>

      </div>
    </motion.section>
  );
}