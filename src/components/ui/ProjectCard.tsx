// project card for each project design 

'use client';


import {motion} from "framer-motion";
import { FiGithub , FiExternalLink } from "react-icons/fi";
import { Project } from "@/types";


interface ProjectCardProps {
   project : Project;
   index : number;
}




export default function ProjectCard({project , index} : ProjectCardProps) {
    
   
     return (

        <motion.div initial={{opacity : 0 , y : 20}} animate={{opacity : 1 , y : 20}} transition={{duration : 0.3 , delay : 0.4 + index * 0.1}} className="border border-gray-800  rounded-lg p-6 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-gray-900/50 group">


             <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-white group hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>

                <span className="text-xs text-gray-500">{project.date}</span>
             </div>


             <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>



             <div className="flex flex-wrap gap-2 mb-4">

              {project.tech.map((tech) => (
                 
                   <span key={tech} className="px-3 p-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700">

                   </span>

              ))}

               </div>


               <div>

                {project.github && (
                    
                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">

                      <FiGithub size={16}/>


                      Code
                    </a> 
                )}

                {
                  project.live && (

                     <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">

                      <FiExternalLink size={16}/>

                      Live demo

                     </a>

                  )
                }





                </div>



        </motion.div>
       
     )


}