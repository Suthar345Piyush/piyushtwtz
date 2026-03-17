// hero section of the app 

'use client';


import {motion} from 'framer-motion';
import Image from "next/image";
import { useState } from 'react';


export default function Hero() { 
    
   const [isSwapped , setIsSwapped] = useState(false);

     return (

        <motion.section initial={{opacity : 0 , y : 20}} animate={{opacity : 1 , y : 0}} transition={{duration : 0.5}} className='mb-16'>

         <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12 pb-2'>

            {/* profile image  */}

            <motion.div initial={{opacity : 0 , scale : 0.8}} animate={{opacity : 1 , scale : 1}} transition={{duration : 0.5 , delay : 0.2}} className='relative'>

               <div onClick={() => setIsSwapped(prev => !prev)} className='relative w-32 h-32 md:w-40 md:h-40 rounded-full  overflow-hidden ring-4 ring-gray-800 dark:ring-black shadow-xl hover:scale-105 active:scale-95 transition-transform duration-300'>

               <Image src="/images/ownphoto.jpg" alt="Profile" width={160} height={160} className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-500 ${isSwapped ? 'opacity-0' : 'opacity-100'}`} priority/>


               <Image src="/images/folioimage.png" alt="Alternate" width={160} height={160} className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-500 ${isSwapped ? 'opacity-100' : 'opacity-0'}`} priority/>

          </div>

            </motion.div>

         </div>


           <h1 className='text-5xl md:text-6xl font-bold mb-4 text-white'>hi,i'm piyush👋/.</h1>
           <span className='text-gray-300'>full stack developer - building and learning</span>


           <div className='inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#111] border border-[#2a2a2a] rounded-xl mt-8 mb-0.5'>
             <span className='w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-bounce shrink-0'/>
              <p className='text-[#e5e5e5] text-sm font-semibold tracking-tight whitespace-nowrap m-0'>available - open to freelance projects and collaborations</p>
           </div>

        </motion.section>

     )
};


