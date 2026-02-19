// hero section of the app 

'use client';


import {motion} from 'framer-motion';
import Image from "next/image";







export default function Hero() {

     return (

        <motion.section initial={{opacity : 0 , y : 20}} animate={{opacity : 1 , y : 0}} transition={{duration : 0.5}} className='mb-16'>

         <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12 pb-2'>

            {/* image  */}

            <motion.div initial={{opacity : 0 , scale : 0.8}} animate={{opacity : 1 , scale : 1}} transition={{duration : 0.5 , delay : 0.2}} className='relative'>

               <div className='w-32 h-32 md:w-40 md:h-40 rounded  overflow-hidden ring-4 ring-gray-800 dark:ring-gray-700 shadow-xl bg-linear-to-br from blue-500 to purple-600'>

                  <Image src="/images/profile.jpg" alt="Profile" width={160} height={160} className='object-cover w-full h-full' priority/>



                   
               </div>

              
            </motion.div>
             


         </div>




           <h1 className='text-5xl md:text-6xl font-bold mb-4 text-white'>hi, piyush here/.</h1>
           <p className='text-white text-lg'>been here for 20 years/.</p>


           

            




           

        </motion.section>

     )
};


