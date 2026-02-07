// work experience section here 

'use client';



import {motion} from "framer-motion";
import { workExperience } from "@/data/work";



export default function WorkExperience  ()  {

  return (
   
     <motion.section initial={{opacity : 0 , y : "20"}} animate={{opacity : 1 , y : 0}}
      transition={{duration : 0.5 , delay : 0.2}} className="mb-16"
     >

       <h2 className="text-3xl font-bold mb-6">
        cool place i worked at/.
       </h2>

       <div className="space-y-6">

         {workExperience.map((exp , index) => (

          <motion.div key={exp.id} initial={{opacity : 0, x : -20}} animate={{opacity : 1 , x : 0}} transition={{duration : 0.3 , delay : 0.3 + index * 0.1}} className="flex items-center justify-between group">


            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-xl font-bold text-white">

                 {exp.company.charAt(0).toUpperCase()}

              </div>


              <div>
                   <h3 className="font-semibold text-black group hover:text-black transition-colors">{exp.company}</h3>

             <p className="text-sm text-black">
                 {exp.position} 
                  </p>
              </div>

            </div>


            <div className="text-right text-sm text-black">
              {exp.startDate} - {exp.endDate}
            </div>

          

          </motion.div>


         ))}
         
       </div>




     </motion.section>

  )

}