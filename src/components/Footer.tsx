// bubble animation footer section on the page 



'use client';


import {motion} from "framer-motion";
import { FiGithub , FiLinkedin , FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import {  BiHomeAlt } from "react-icons/bi";



export default function Footer() {

   const socialLinks = [

      {icon : BiHomeAlt , href : "#" , label : "Home"},
      {icon : SiLeetcode , href : "https://leetcode.com/u/Piyush124Suthar/" , label : "LeetCode"},
      {icon : FiGithub , href : "https://github.com/Suthar345Piyush" , label : "Github"},
      {icon : FiLinkedin , href : "https://www.linkedin.com/in/piyush-suthar-641a0826a/" , label : "Linkedin"},
      {icon : FaXTwitter , href : "https://x.com/piyushtwtz" , label : "X"},
      {icon : FiMail , href : "mailto:piyushsuthar524@gmail.com" , label : "Email"}
      
   ];


   return (
       
       <motion.footer initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.5 , delay : 0.7}}
         className="py-8 border-t border-gray-800"
        >

          <div className="text-center mb-6">

            <p className="text-black mb-2">say hello on/.</p>

            <a href="https://x.com/piyushtwtz" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black transition-colors underline font-bold">X</a>


          </div>



          <div className="flex flex-row items-center gap-5 justify-center mt-5">

            {socialLinks.map((link , index) => (

                 <motion.a

                 key={link.label} 
                 href={link.href} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 initial={{opacity : 0 , y : 0}} 
                 animate={{opacity : 1 , y : 0}} 
                 transition={{duration : 0.3 ,  delay : 0.8 + index * 0.05}}
                 className="text-black hover:text-black transition-colors"
                 aria-label={link.label}

                  >

                    <link.icon size={25}/>

                 </motion.a>


            ))}
             
          </div>


       </motion.footer>

     
   )



   
   
}

