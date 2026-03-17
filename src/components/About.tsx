// about file  

'use client';


import {motion} from 'framer-motion';


export default function About() {
     
     return (

        <motion.section initial={{opacity : 0 , y : 20}} animate={{opacity : 1 , y : 0}} transition={{duration : 0.5 , delay : 0.1}} className='mb-16'>

          <h2 className='text-3xl font-bold mb-2 text-white'>
            about me/.
          </h2>

          <div className='space-y-4 text-white leading-relaxed'>
            <p>
              a 20 year's old full stack developer from india, love to build real products which make impact on market, i mostly spend my time on building and learning software technologies, love to build, ship and maintaining products on the internet.
              </p>
          

           </div>

              <div className=''>

               <div>

               </div>

           </div>



           

        </motion.section>

     )
}


