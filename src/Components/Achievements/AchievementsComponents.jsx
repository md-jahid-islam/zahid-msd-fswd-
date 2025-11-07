import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaTrophy, FaCertificate, FaCode } from "react-icons/fa";

 const achievements = [
  {
    id: 1,
    title: "Full Stack Web Developer Certification",
    organization: "Creative IT Institute",
    year: "2025",
    description:
      "Earned certification for mastering full stack development, focusing on React, Node.js, Express, and MongoDB.",
    icon: <FaCertificate className="text-yellow-400" />,
  },
  {
    id: 2,
    title: "Best Frontend Developer Certification ",
    organization: "Creative IT Institute",
    year: "2024",
    description:
      "Recognized as the top performer for developing responsive and animated React web interfaces.",
    icon: <FaTrophy className="text-amber-400" />,
  },
  {
    id: 3,
    title: "Outstanding Project — Orebi Ecommerce",
    organization: "Personal Project",
    year: "2024",
    description:
      "Built a complete ecommerce application with real-time data handling, product pagination, and Redux integration.",
    icon: <FaAward className="text-blue-400" />,
  },
  {
    id: 4,
    title: "UI/UX Design Excellence",
    organization: "Figma Workshop",
    year: "2024",
    description:
      "Awarded for exceptional design sense and translating Figma designs into fully responsive web layouts.",
    icon: <FaCode className="text-pink-400" />,
  },
 ];

 const AchievementsComponents = () => {
  return (
    <>
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl opacity-30"></div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
          My <span className="text-blue-500">Achievements</span>
        </h2>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 rounded-2xl border border-gray-700 hover:border-blue-500 p-8 shadow-md hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 flex flex-col items-center text-center hover:scale-105"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-2">
                {item.title}
              </h3>

              {/* Organization and Year */}
              <p className="text-blue-400 font-medium text-sm mb-1">
                {item.organization}
              </p>
              <p className="text-gray-400 text-xs mb-4">{item.year}</p>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>    
    </>
  );
 };

 export default AchievementsComponents;
