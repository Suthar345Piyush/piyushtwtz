'use client';


import {motion} from "framer-motion";



export default function ResumeLink() {
   
      
  return (
       
       <motion.section initial={{opacity : 0 , y : 20}} animate={{opacity : 1 , y : 0}} transition={{duration : 0.5 , delay : 0.4}} className="mt-10 mb-10">

        <h2 className="text-2xl font-bold text-white mb-4">resume/.</h2>

        <button className="bg-white cursor-pointer rounded-xl text-black hover:bg-gray-300 font-bold  w-28 h-10">
           

           <a href="https://newresume.linkyhost.com/">📄resume</a>


        </button>

        
         
       </motion.section>
      
  )


}