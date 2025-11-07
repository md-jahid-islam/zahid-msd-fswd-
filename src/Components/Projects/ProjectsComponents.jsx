import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

 const projects = [
  {
    id: 1,
    title: "Orebi Ecommerce",
    image: "/images/orebi-showp-website-e-commerce.vercel.app_.png",
    description:
    "A full-featured ecommerce web app with product filters, cart, pagination, and Redux integration.",
    tech: ["React", "Redux", "Tailwind CSS", "Firebase"],
    live: "https://orebi-showp-website-e-commerce.vercel.app/",
    github: "https://github.com/md-jahid-islam/OREBI-SHOWP-WEBSITE-E-COMMERCE.git",
  },
  {
    id: 2,
    title: "My Clients Prtoject JBL.COM",
    image: "/images/jbl-com-io.vercel.app_ProductDetails.png",
    description:
    "A creative photographer portfolio website designed in Figma and developed with responsive animations.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    live: "https://jbl-com-io.vercel.app/",
    github: "https://github.com/md-jahid-islam/JBL.COM.git",
  },
  {
    id: 3,
    title: "Doctor Care",
    image: "/images/html-css-js-crash-course-doctor-care-project-main.vercel.app_.png",
    description:
    "Modern photography portfolio app featuring smooth scroll animations, galleries, and contact integration.",
    tech: ["HTML-5", "CSS-3", "Tailwind CSS"],
    live: "https://html-css-js-crash-course-doctor-care-project-main.vercel.app/",
    github: "https://github.com/md-jahid-islam/html-css-js-crash-course-doctor-care-project-main.git",
  },
    {
    id: 3,
    title: "Mcap Photography",
    image: "/images/mcap.png",
    description:
    "Modern photography portfolio app featuring smooth scroll animations, galleries, and contact integration.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://mcap.vercel.app/",
    github: "https://github.com/jahidulislamdev/Mcap",
  },
    {
    id: 3,
    title: "Mcap Photography",
    image: "/images/mcap.png",
    description:
    "Modern photography portfolio app featuring smooth scroll animations, galleries, and contact integration.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://mcap.vercel.app/",
    github: "https://github.com/jahidulislamdev/Mcap",
  },
    {
    id: 3,
    title: "Mcap Photography",
    image: "/images/mcap.png",
    description:
    "Modern photography portfolio app featuring smooth scroll animations, galleries, and contact integration.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://mcap.vercel.app/",
    github: "https://github.com/jahidulislamdev/Mcap",
  },
    {
    id: 3,
    title: "Mcap Photography",
    image: "/images/mcap.png",
    description:
    "Modern photography portfolio app featuring smooth scroll animations, galleries, and contact integration.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://mcap.vercel.app/",
    github: "https://github.com/jahidulislamdev/Mcap",
  },
    {
    id: 3,
    title: "Mcap Photography",
    image: "/images/mcap.png",
    description:
    "Modern photography portfolio app featuring smooth scroll animations, galleries, and contact integration.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://mcap.vercel.app/",
    github: "https://github.com/jahidulislamdev/Mcap",
  },
    {
    id: 3,
    title: "Mcap Photography",
    image: "/images/mcap.png",
    description:
    "Modern photography portfolio app featuring smooth scroll animations, galleries, and contact integration.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://mcap.vercel.app/",
    github: "https://github.com/jahidulislamdev/Mcap",
  },
    {
    id: 3,
    title: "Mcap Photography",
    image: "/images/mcap.png",
    description:
    "Modern photography portfolio app featuring smooth scroll animations, galleries, and contact integration.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://mcap.vercel.app/",
    github: "https://github.com/jahidulislamdev/Mcap",
  },
  {
    id: 4,
    title: "Login & Authentication System",
    image: "/images/login.png",
    description:
    "A responsive login system built using Firebase authentication, form validation, and password toggle.",
    tech: ["React", "Firebase", "React-Toastify"],
    live: "#",
    github: "#",
  },
];

const ProjectsComponents = () => {
  return (
    <>
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
          My <span className="text-blue-500">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-blue-500/20" >
      
              {/* Image Section */}
              <div className="relative overflow-hidden group">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transform hover:scale-105 transition" >
                  Live <FaExternalLinkAlt />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transform hover:scale-105 transition" >
                  Code <FaGithub />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-700/60 text-blue-400 px-3 py-1 rounded-full" >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
 };

 export default ProjectsComponents;
