// Education section for front page 


'use client';


import {motion} from "framer-motion";
import { education } from "@/data/education";




export default function Education() {
   
     return (

       <motion.section initial={{opacity : 0 , y : 20}} animate={{opacity : 1 , y : 0}} transition={{duration : 0.5  , delay : 0.4}} className="mb-16">

          <h2 className="text-3xl font-bold mb-6">education/.</h2>


          <div>

            {education.map((educ , index) => (
               
                <motion.div 
                key={educ.id} 
                initial={{opacity : 0 , x : -20}} 
                animate={{opacity : 1 , x : 0}} 
                transition={{duration : 0.3 , delay : 0.5 + index * 0.1}} 
                className="flex items-center justify-between">

                
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">

                    <span className="text-xl">🎓</span>

                  </div>


                  <div>

                    <h3 className="text-black font-semibold text-lg">
                      {educ.institution}
                    </h3>

                    <p className="text-sm text-gray-700">{educ.field}</p>



                  </div>
                </div>


                {/* education timeperiod  */}

                <div className="text-right text-sm text-gray-700">
                  {educ.startDate} - {educ.endDate}{" "}
                  {educ.status && <span>({educ.status})</span>}
                </div>


            </motion.div>
                 
            ))}

          </div>
        
        
       </motion.section>
       


     )
}