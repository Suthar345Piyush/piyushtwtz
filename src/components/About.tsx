// about file  

'use client';


import {motion} from 'framer-motion';


export default function About() {
     
     return (

        <motion.section initial={{opacity : 0 , y : 20}} animate={{opacity : 1 , y : 0}} transition={{duration : 0.5 , delay : 0.1}} className='mb-16'>

          <h2 className='text-3xl font-bold mb-6'>
            about/.
          </h2>

          <div className='space-y-4 text-black leading-relaxed'>
             <p>Learnt by doing things and by implementing , love to build web & mobile apps</p>

             <p>i like general tech , space tech , physics and science. they make everything possible in this universe</p>

             <p>i write code for web & mobile apps</p>

           </div>

        </motion.section>

     )
}


