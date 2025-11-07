import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';

 // ========== Home Components start ========== //
 const HomeComponents = () => {

  return (
    <>
    <section className=''>
    <div className="container mx-auto px-4 py-4">
      {/* Toggle Theme Button */}
      <button className="absolute top-4 right-4 px-4 py-2 rounded-md bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-400 transition" aria-label="Toggle dark/light mode">
      </button>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#94ADCF]">Jahidul Islam</h1>
          <div className="text-lg md:text-xl text-white">
            <Typewriter
              options={{
                strings: ['Front-End', 'Developer', 'with React', 'Developer', 'full stack', 'Developer', 'with Node.js'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}/>
          </div>
          <div>
          <p className=" text-white md:text-lg font-medium max-w-md mx-auto md:mx-0">
          You can trust me. I will make your website beautiful Design and Responsive ui/ux mordern design 
          </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
            <Link to="/about">
            <button className=" bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition-transform duration-300"> View Work
            </button>
            </Link>
            <Link to="/contact">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition-transform duration-300"> Contact Me
            </button>
            </Link> 
            </div>
          <div>
          <h2 className="text-md md:text-lg font-semibold mt-6 text-white "> Trusted by World Leading Brands <br /> Portfolio!
          </h2>
          </div>
          </div>

        {/* Right Section */}
        <div className="relative flex flex-col items-center md:w-1/2 pt-10">
          <img className="w-40 h-40 md:w-56 md:h-56 rounded-full hover:scale-105 transition-transform duration-300" src="/images/Profile.jpg" alt="Jahidul Islam Profile"/>
          <div className="mt-6 text-center space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-white ">Jahidul Islam</h3>
            <div className="text-lg md:text-xl font-semibold text-white ">
              <Typewriter
                options={{
                  strings: ['Front-End Developer!', 'with React', 'Backend', 'Node.js!'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}/>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-white text-xl">
            <Link className='' to="https://www.facebook.com/jahidul.islam.98621/" target='balnk' aria-label="Facebook">
            <FaFacebook className="transition" />
            </Link>
            <Link to="https://github.com/md-jahid-islam" target='balnk' aria-label="GitHub">
            <FaGithub className="transition" />
            </Link>
            <Link to="https://www.linkedin.com/in/jahidul-islam-a5021b325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank' aria-label="LinkedIn">
            <IoLogoLinkedin className="transition" />
            </Link>
          </div>

          {/* Resume Download */}
          <div className="mt-6">
          <a href="/images/Zahidul Islam.pdf" download="Zahidul_Islam_Resume.pdf" className="  bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition-transform duration-300"> Download Resume!</a>
          </div>   
        </div>
      </div>
  
    </div>    
    </section>
    </>
  );
 };

 //=========== Home Components end ============ //
 export default HomeComponents;