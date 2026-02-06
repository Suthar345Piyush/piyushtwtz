// work experience section here 

import {motion} from "framer-motion";
import { workExperience } from "@/data/work";



export default function WorkExperience () {
   
     <motion.section initial={{opacity : 0 , y : "20"}} animate={{opacity : 1 , y : 0}}
      transition={{duration : 0.5 , delay : 0.2}} className="mb-16"
     >

       <h2 className="text-3xl font-bold mb-6">
        cool place i worked at
       </h2>

       <div className="space-y-6">

         {workExperience.map((exp , index) => (

          <motion.div key={exp.id} initial={{opacity : 0, x : -20}} animate={{opacity : 1 , x : 0}} transition={{duration : 0.3 , delay : 0.3 + index * 0.1}} className="flex items-center justify-between group">

          </motion.div>


         ))}
         
       </div>




     </motion.section>

}