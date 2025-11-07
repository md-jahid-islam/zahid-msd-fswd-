import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
 
 // ========== Navbar Component start ========== // 
 const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ===== Scroll to section smoothly ===== //
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, 
        behavior: "smooth",
      });
    }
  };

  // ======== Nav Links Data ======== //
  const navLinks = [
    { name: "Home", path: "/", id: "Home" },
    { name: "About", path: "/About", id: "About" },
    { name: "Skills", path: "/Skills", id: "Skills" },
    { name: "Projects", path: "/Projects", id: "Projects" },
    { name: "Experience", path: "/Experience", id: "Experience" },
    { name: "Achievements", path: "/Achievements", id: "Achievements" },
    { name: "Contact", path: "/Contact", id: "Contact" },
  ];

  // ======== Active and Default/Hover Styles ======== //
  const linkClasses = (isActive) =>
    `py-2 px-3 block transition duration-300 ease-in-out ${
      isActive
        ? "text-yellow-400 font-bold"
        : "text-gray-300 hover:text-white hover:underline hover:underline-offset-4"
    }`;

  return (
    <>
    <nav className="bg-[#1F2937] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <div>
            <div className="flex gap-5">
              <Link to="/"> <img className="w-12 h-12 pt-1.5 rounded-full" src="/images/zahid.jpg" alt="logo" />
              </Link>
              <Link className="text-2xl font-extrabold mt-1.5 text-yellow-400" to="/" > Jahidul Islam
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex justify-center items-center space-x-7">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => scrollToSection(link.id)}
                    className={({ isActive }) => linkClasses(isActive)} >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen} >
              {isMenuOpen ? (
                <span className="text-xl">✖</span>
              ) : (
                <span className="text-xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden transition-all duration-300 ease-in-out`}
        id="mobile-menu" >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                scrollToSection(link.id);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left rounded-md text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 font-medium transition duration-300" >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>    
    </>
  );
 };

 export default Navbar;
