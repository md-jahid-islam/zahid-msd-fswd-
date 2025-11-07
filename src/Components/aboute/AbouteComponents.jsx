import React from "react";
 const AboutComponent = () => {
  return (
    <>
    <section className="relative from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-16 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0  from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl opacity-30"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side - Video */}
        <div className="flex justify-center">
          <div className="relative group w-full max-w-md">
            <div className="absolute inset-0 from-blue-500 to-cyan-500 opacity-30 blur-2xl rounded-3xl group-hover:opacity-60 transition duration-500"></div>
            <video className="rounded-2xl w-full h-auto object-cover border border-gray-700 shadow-lg group-hover:scale-105 transition-transform duration-500" src="/images/jahid.mp4" autoPlay loop muted playsInline >
            </video>
            <video className="rounded-2xl w-full h-auto mt-10 object-cover border border-gray-700 shadow-lg group-hover:scale-105 transition-transform duration-500" src="/images/jahid.mp4" autoPlay loop muted playsInline >
            </video>
          </div>
        </div>
        
        {/* Right Side - Content */}
        <div className="text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            I’m <span className="font-semibold text-white">Jahidul Islam</span>, a passionate 
            <span className="text-blue-400"> Full Stack Web Developer</span> with over 2 years of
            professional experience. I specialize in building modern, responsive web applications 
            using <span className="text-blue-400">React, Tailwind CSS, and Node.js</span>. 
            My focus is on creating visually engaging, high-performance interfaces with 
            seamless backend integration.
          </p>

          {/* Professional Experience */}
          <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition duration-300 backdrop-blur-sm shadow-md">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
            💼 Professional Experience
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>• 2+ years as a Full Stack Developer (React, Node.js, MongoDB)</li>
              <li>• Built responsive web apps like <span className="text-blue-400">Orebi Ecommerce</span> and <span className="text-blue-400">Rupantorito Portfolio</span></li>
              <li>• Expertise in Firebase Auth, API Integration & UI/UX Animations</li>
            </ul>
          </div>

          {/* Academic Education */}
          <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition duration-300 backdrop-blur-sm shadow-md">
            <h3 className="text-2xl font-semibold text-purple-400 mb-3 flex items-center gap-2">
            🎓 Academic Education
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>• <span className="font-medium text-white">BSS (Bachelor in Social Science)</span> — Habiganj Govt College (2025–Present)</li>
              <li>• <span className="font-medium text-white">HSC in Humanities</span> — Habiganj Kabir College Academy (2023)</li>
              <li>• <span className="font-medium text-white">SSC in Commerce</span> — Hazrat Shahjala (Ra.) High School (2021)</li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="/contact" className=" bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition-transform duration-300">
            Contact Me
            </a>

          {/* CTA Buttons Download Resume */}
            <a href="/images/Zahidul Islam.pdf" download="Zahidul_Islam_Resume.pdf" className=" bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition-transform duration-300">
            Download Resume
            </a>
          </div>
        </div>
      </div>
    </section> 
    </>
  );
 };

 export default AboutComponent;
