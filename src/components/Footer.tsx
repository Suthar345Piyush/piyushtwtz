'use client';

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { BiHomeAlt } from "react-icons/bi";
import { FloatingToolbar } from "@/components/floating-toolbar";



export default function Footer() {


  const socialLinks = [
    { id: "home",     label: "Home",     icon: <BiHomeAlt size={18} />,   href: "/" , shortcut : "H" },
    { id: "leetcode", label: "LeetCode", icon: <SiLeetcode size={18} />,  href: "https://leetcode.com/u/Piyush124Suthar/" , shortcut : "L" },
    { id: "github",   label: "GitHub",   icon: <FiGithub size={18} />,    href: "https://github.com/Suthar345Piyush" , shortcut : "G" },
    { id: "linkedin", label: "LinkedIn", icon: <FiLinkedin size={18} />,  href: "https://www.linkedin.com/in/piyush-suthar-641a0826a/" , shortcut : "L" },
    { id: "twitter",  label: "X",        icon: <FaXTwitter size={18} />,  href: "https://x.com/piyushtwtz" , shortcut : "X" },
    { id: "email",    label: "Email",    icon: <FiMail size={18} />,      href: "mailto:piyushsuthar524@gmail.com" , shortcut : "E" },
  ];


// for selecting the email 

  const handleSelect = (id: string) => {
    const link = socialLinks.find((l) => l.id === id);
    if (!link) return;

    if (id === "email") {
      window.location.href = link.href;
    } else {
      window.open(link.href, id === "home" ? "_self" : "_blank", "noopener noreferrer");
    }
  };



  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="py-8 border-t border-gray-800"
    >
      <div className="text-center mb-6">
        <p className="text-white mb-2">open for work/.</p>
        <a
          href="mailto:piyushsuthar524@gmail.com"
          className="text-white transition-colors font-bold"
        >
          piyushsuthar524@gmail.com
        </a>
      </div>

 
      <div className="flex items-center justify-center mt-8">

        <FloatingToolbar items={socialLinks} onSelect={handleSelect} />

      </div>
    </motion.footer>
  );
}