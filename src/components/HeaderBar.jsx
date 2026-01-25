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
        ? 'bg-black shadow-md py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Column 2: Centered Logo PNG */}
        <div className="flex justify-center">
          <a href="/">
            <img
              src="/Logo.png"
              alt="Benjamin Bushnell Logo"
              /* Use dynamic classes to shrink the logo on scroll */
              className={`transition-all duration-300 ease-in-out object-contain ${isScrolled ? 'h-10' : 'h-14'
                }`}
            />
          </a>
        </div>

        <ul className={`flex space-x-8 font-medium transition-colors duration-300 text-white`}>
          <li className="hover:opacity-70 cursor-pointer"><a href="/">Home</a></li>
          <li className="hover:opacity-70 cursor-pointer"><a href="/about/">About</a></li>
          <li className="hover:opacity-70 cursor-pointer"><a href="/blog/">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderBar;
