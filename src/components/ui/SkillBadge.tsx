// skill container to fit skills name inside 

'use client';

import {motion} from "framer-motion";

interface SkillBadgeProps {
    skill : string;
    index : number;
}


export default function SkillBadge({skill , index} : SkillBadgeProps) {
    
    return ( 

       <motion.span initial={{opacity : 0 , scale : 0.8}} animate={{opacity : 1 , scale : 1}} transition={{
         duration : 0.3 , delay : 0.6 + index * 0.05
       }} className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-default">

        {skill}
         
       </motion.span>
        
    )


}
