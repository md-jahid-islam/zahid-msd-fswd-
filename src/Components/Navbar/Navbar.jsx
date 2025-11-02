import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
   // Scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ============ Nav Links Data ============= // 
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Skills", path: "/Skills" },
    { name: "Projects", path: "/Projects" },
    { name: "Experience", path: "/Experience" },
    { name: "Achievements", path: "/Achievements" },
    { name: "Contact", path: "/Contact" },
  ];

  // ======== Active link style and Default/Hover style ======== // 
  const linkClasses = (isActive) => 
    `py-2 px-3 block transition duration-300 ease-in-out ${
      isActive 
        ? 'text-yellow-400 font-bold' 
        : 'text-gray-300 hover:text-white hover:underline hover:underline-offset-4'  
    }`;

    // ======== Set a dark, smooth background for the whole navbar ======= // 
  return (
    <nav className=" bg-[#1F2937] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <div className="">
            <div className='flex gap-5'>
            <Link to={""}><img className=' w-16 h-8 pt-1.5 rounded-b-xs' src="/images/zahid.jpg" alt="img" /></Link>
            <Link className='text-2xl font-extrabold text-yellow-400' to={""}> Jahidul Islam</Link>
            </div>
          </div>

          {/* 2. Desktop Menu (Hidden on small screens) */}
          <div className="hidden lg:block">
            <ul className="flex justify-center items-center space-x-7">
              {/* Using NavLink to automatically apply active styles */}
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.path} className={({ isActive }) => linkClasses(isActive)}> {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Mobile Menu Button (Hidden on large screens) */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={isMenuOpen}>
              <span className="sr-only">Open main menu</span>
              {/* Replace with actual icons (Menu/X) */}
              {isMenuOpen ? (
                // ======= Placeholder for Close Icon ======= // 
                <span className="text-xl">X</span> 
              ) : (
                // ========= Placeholder for Menu Icon ========= // 
                <span className="text-xl">☰</span> 
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Menu Content (Toggled by state) */}
      <div  className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden transition-all duration-300 ease-in-out`} id="mobile-menu" >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            // ======== Close the menu when a link is clicked ========== // 
            <Link  key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)} className="block rounded-md text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 font-medium transition duration-300" >
            {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
 };
 export default Navbar;
  // hdfjkasdhfkjdnasklfjkasdjkf