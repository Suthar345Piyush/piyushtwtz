// email subscription section 

'use client';


import {motion} from "framer-motion";
import { useState } from "react";


export default function Subscribe() {
    
     const [email , setEmail] = useState("");
     const [status , setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

     

     const handleSubmit = async (e : React.SyntheticEvent) => {

         e.preventDefault();
         setStatus('loading');

         /* todo - further send email */

         setTimeout(() => {

           if(email) {
              setStatus("success");
              setEmail("");

              setTimeout(() => setStatus("idle") , 3000);

           } else {
              setStatus("error");
           }
         } , 1000);

     };




     return (

        <motion.section initial={{opacity : 0 , y : "20"}} animate={{opacity : 1  , y : 0}}
            transition={{duration : 0.5 , delay : 0.6}}
            className="mb-16"
          >

            <h2 className="text-3xl font-bold mb-2 text-white">
              stay updated/.
            </h2>

            <p className="text-white mb-6">subscribe to my email list/.</p>


            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">

               <input 
               type="email" 
               value={email} 
               onChange={(e) => setEmail(e.target.value)} 
               placeholder="Enter your email" className="flex-1 px-4 py-3 bg-transparent border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 transition-colors text-white placeholder:text-gray-600" 
               disabled={status === 'loading'}/>

               <button type="submit" disabled={status === "loading"} className="bg-white cursor-pointer rounded-xl text-black font-bold px-3 py-4">

                {status === 'loading' ? "..." : status === 'success' ? "✓" : "Subscribe"}

               </button>
            </form>

            {status === "success" && (
                <p className="text-green-500 text-sm mt-2">Thanks for subscribing!</p>
            )}

            {
               status === "error" && (
                   <p className="text-red-500 text-sm mt-2">Please enter a valid email.</p>
               )
            }

            
           
        </motion.section>

     )




}