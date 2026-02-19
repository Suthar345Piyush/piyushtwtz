// nikola tesla quote under about section 

'use client';


import {motion} from "framer-motion";


export default function Quote() {
    return (
       <motion.section initial={{opacity : 0 , y : 20}} animate={{
         opacity : 1 , y : 0
       }} transition={{duration : 0.5 , delay : 0.1}} className="mb-16">

         <h1 className="text-3xl font-bold mb-2 text-white">
         Quote that force me to work more/.
         </h1>

         <div className="space-y-4 text-white leading-relaxed">
           <p className="font-sans">
            I don't care that they stole my idea , i care that they don't have any of their own.
           </p>
           <h1 className="font-sans items-stretch place-self-end pr-36 text-white">~ Nikola Tesla</h1>
         </div>

       </motion.section>
    )
}