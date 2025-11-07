import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaServer, FaLaptopCode } from "react-icons/fa";
 
 // ======= Experience Data ======= //
 const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Creative IT Institute",
    duration: "2024 ",
    description:"Developed responsive and modern user interfaces using React, Tailwind CSS, and Framer Motion. Focused on UI/UX animation and smooth interactivity.",
    icon: <FaReact className="text-sky-400 text-5xl" />,
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Creative IT Institute",
    duration: "2025 – Present",
    description:"Built scalable backend APIs using Node.js and Express. Managed databases with MongoDB and integrated authentication with Firebase and JWT.",
    icon: <FaNodeJs className="text-green-400 text-5xl" />,
  },
  {
    id: 3,
    role: "Full Stack Web Developer",
    company: "Creative IT Institute",
    duration: "2025",
    description:"Developed full-stack web applications with React, Node.js, and MongoDB. Focused on API integration, authentication, and real-time user experiences.",
    icon: <FaServer className="text-purple-400 text-5xl" />,
  },
  {
    id: 4,
    role: "Web Design",
    company: "Creative IT Institute",
    duration: "2023 – 2024",
    description:"Designed static and responsive websites using HTML, CSS, and Bootstrap. Learned layout structuring and professional design principles.",
    icon: <FaLaptopCode className="text-yellow-400 text-5xl" />,
  },
];

 const ExperienceComponents = () => {
  return (
    <>
    <section id="experience" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-16 overflow-hidden" >
      {/* ==== Background Glow ==== */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl opacity-40"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* ==== Title ==== */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-14">
          My <span className="text-blue-500">Experience</span>
        </motion.h2>

        {/* ==== Experience Grid ==== */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gray-800/60 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 shadow-md hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-500">
              {/* ==== Icon ==== */}
              <div className="flex justify-center mb-5">{exp.icon}</div>

              {/* ==== Role & Company ==== */}
              <h3 className="text-2xl font-semibold text-white mb-2">
                {exp.role}
              </h3>
              <p className="text-blue-400 font-medium">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>

              {/* ==== Description ==== */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
 };

 export default ExperienceComponents;
