// hero section of the app 

'use client';


import {motion} from 'framer-motion';


export default function Hero() {

     return (

        <motion.section initial={{opacity : 0 , y : 20}} animate={{opacity : 1 , y : 0}} transition={{duration : 0.5}} className='mb-16'>

           <h1 className='text-5xl md:text-6xl font-bold mb-4'>hi, piyush here</h1>
           <p className='text-gray-400 text-lg'>been here for 20 years</p>

        </motion.section>

     )
};


