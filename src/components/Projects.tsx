// projects section on page  



'use client';


import {motion} from "framer-motion";
import { projects } from "@/data/projects";
import { FiGithub , FiExternalLink } from "react-icons/fi";
import Image from "next/image";


export default function Projects() {
    
     return (
       
         <motion.section initial={{opacity : 0 , y : 20}} animate={{opacity : 1 , y : 0}} transition={{duration : 0.5 , delay : 0.3}} className="mb-16">


          <h2 className="text-3xl font-bold mb-6 text-white">projects/.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

             {projects.map((project , index) => (

                 <motion.div key={project.id} initial={{opacity : 0 , y : 20}} animate = {{opacity : 1 , y : 0}} transition={{duration : 0.3 , delay : 0.4 + index * 0.1}} 
                 className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-gray-900/50 group">



                   <div>

                   <Image src={project.image} alt="ProjectImage" width={50} height={35} className="object-cover w-96 h-56 rounded-xl" priority/>

                   </div>

                   <div className="flex items-start justify-between mb-3">

                    <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors">

                       {project.title}
 
                    </h3>
                    <span className="text-xs text-white">{project.date}</span>
                    </div>

                    <p className="text-white text-sm mb-4 leading-relaxed">{project.description}</p>


                
                <div className="flex flex-wrap gap-2 mb-4">

                  {
                     project.tech.map((tech) => (

                        <span key={tech} className="px-3 py-1 bg-black text-white text-xs rounded-full border border-gray-700">

                           {tech}

                        </span>

                     ))
                  }
                </div>


                {/* code and live demo  */}


                <div className="flex gap-4">

                  {
                   project.github && (

                     <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors items-center gap-2 text-sm">
                       
                        <FiGithub size={16}/>Code

                     </a>
                    
                  )}

                  {
                    project.live && (
                        
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors items-center gap-2 text-sm">

                        <FiExternalLink size={16}/>
                        Live Demo
                      </a>

                    )
                  }

                   
                </div>


                 </motion.div>

             ))}

          </div>




           
         </motion.section>
        
     )


}

