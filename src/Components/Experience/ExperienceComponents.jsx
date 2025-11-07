import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaReact } from "react-icons/fa";

 const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Creative IT Institute",
    duration: "2024 – Present",
    description:
      "Developed modern, responsive front-end applications using React, Tailwind CSS, and Framer Motion. Focused on smooth UI/UX animations and optimized performance.",
    icon: <FaReact className="text-sky-400" />,
  },
  {
    id: 2,
    role: "Full Stack Web Developer",
    company: "Freelance Projects",
    duration: "2025 – 2023",
    description:
      "Built dynamic full-stack web apps using React, Node.js, and MongoDB. Integrated Firebase authentication, API endpoints, and responsive layouts for global clients.",
    icon: <FaServer className="text-green-400" />,
  },
  {
    id: 3,
    role: "Web Design Intern",
    company: "Creative IT Institute",
    duration: "2023 – 2024",
    description:
      "Started my career by designing static and interactive websites with HTML, CSS, and Bootstrap. Learned how to structure clean layouts and maintain responsive designs.",
    icon: <FaLaptopCode className="text-yellow-400" />,
  },
 ];

 const ExperienceComponents = () => {
  return (
    <>
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
          My <span className="text-blue-500">Experience</span>
        </h2>

        {/* Experience Timeline */}
        <div className="relative border-l border-gray-700 pl-6 md:pl-12 space-y-12 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gray-800/60 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 backdrop-blur-sm shadow-md transition-all duration-300 hover:shadow-blue-500/20 text-left">
              {/* Timeline Dot */}
              <div className="absolute -left-3 md:-left-5 top-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg"></div>

              {/* Icon */}
              <div className="text-4xl mb-4">{exp.icon}</div>

              {/* Role & Company */}
              <h3 className="text-2xl font-semibold text-white">
                {exp.role}
              </h3>
              <p className="text-blue-400 font-medium">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
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
