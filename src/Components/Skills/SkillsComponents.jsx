import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFirebase, SiMongodb, SiFigma, SiRedux } from "react-icons/si";

 const SkillsComponents = () => {
  const skills = [
    { name: "React", level: 90, icon: <FaReact className="text-sky-400" /> },
    { name: "JavaScript", level: 85, icon: <SiJavascript className="text-yellow-400" /> },
    { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Redux", level: 80, icon: <SiRedux className="text-purple-500" /> },
    { name: "Firebase", level: 82, icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Node.js", level: 78, icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", level: 75, icon: <SiMongodb className="text-green-400" /> },
    { name: "Git & GitHub", level: 100, icon: <FaGitAlt className="text-red-500" /> },
    { name: "Database", level: 80, icon: <FaDatabase className="text-teal-400" /> },
    { name: "Figma", level: 90, icon: <SiFigma className="text-pink-500" /> },
  ];

  return (
    <>
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
          My <span className="text-blue-500">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 rounded-2xl p-5 border border-gray-700 hover:border-blue-500 transition duration-300 backdrop-blur-sm shadow-md flex flex-col items-center text-center group hover:scale-105"
            >
              <div className="text-4xl mb-3 group-hover:animate-pulse">{skill.icon}</div>
              <h3 className="text-white font-semibold">{skill.name}</h3>

              {/* Skill Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mt-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                ></motion.div>
              </div>

              <p className="text-gray-400 text-sm mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
 };

 export default SkillsComponents;
