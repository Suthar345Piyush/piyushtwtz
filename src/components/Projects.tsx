// projects section on page

'use client';

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">projects/.</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-400 dark:hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 group bg-white dark:bg-transparent"
          >
            <div>
              <Image
                src={project.image}
                alt="ProjectImage"
                width={400}
                height={250}
                className="object-cover rounded-xl w-full h-48"
                priority
              />
            </div>

            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors mt-1.5">
                {project.title}
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">{project.date}</span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors text-sm"
                >
                  <FiGithub size={16} /> Code
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors text-sm"
                >
                  <FiExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
