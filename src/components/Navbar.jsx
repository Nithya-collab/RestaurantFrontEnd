import React, { useState } from 'react';
import { menuItems } from '../data/navBarMenuItems';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);                      // update the URL
    scrollToSection(path);               // smooth scroll to section
    setIsOpen(false);                    // close mobile menu
  };

  return (
    <nav className="relative p-4 shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://your-image-url.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.5,
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>

      <div className="container mx-auto flex justify-between items-center relative z-10">
        <div className="text-white text-2xl font-title">
          <button onClick={() => handleNavClick('/')} className="focus:outline-none">Bluewave</button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.link)}
              className="text-white hover:text-orange-300 transition"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {!isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-2/3 h-full bg-orange-400 p-6 space-y-6 transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavClick(item.link)}
            className="text-white block hover:text-neutral-200 transition"
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
