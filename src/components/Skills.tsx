// skills section to shown on the page  

import {motion} from "framer-motion";
import { skills } from "@/data/skills";


export default function Skills() {
     
     return (

         <motion.section initial={{opacity : 0 , y : 20}} animate = {{opacity : 1 , y : 0}} transition={{duration : 0.5 , delay : 0.5}} className="mb-16">

            <h2 className="text-3xl font-bold mb-6">Skills</h2>

              <div className="flex flex-wrap gap-3">
                {
                   skills.map((skill , index) => (
                      
                     <motion.span 
                     key={skill} 
                     initial={{opacity : 0 , scale : 0.8}} 
                     animate={{ opacity : 1 , scale : 1}} 
                     transition={{duration : 0.3 , delay : 0.6 + index * 0.05}}
                     className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-default">

                       {skill}
                       
                     </motion.span>
                     
                     
                   ))
                }
                 
 
              </div>


           
         </motion.section>
       
     )


}