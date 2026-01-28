import React, { useState, useEffect } from 'react';

const HeaderBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle background after 50px of scrolling
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? 'fixed top-0 bg-black shadow-md py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/">
          <img
            src="/logo.png"
            alt="Benjamin Bushnell Logo"
            className={`transition-all w-auto drop-shadow-lg  duration-300 ease-in-out object-contain ${isScrolled ? 'h-16' : 'h-25'
              }`}
          />
        </a>

        <ul className={`flex space-x-8 font-bold text-lg transition-colors duration-300 text-white`}>
          <li className="hover:opacity-70 cursor-pointer">
            <a href="/" className="group relative inline-block">
              <span>Home</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="hover:opacity-70 cursor-pointer">
            <a href="/blog/1" className="group relative inline-block">
              <span>Blog</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderBar;
