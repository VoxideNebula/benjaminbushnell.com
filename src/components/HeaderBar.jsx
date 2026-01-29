// import React, { useState, useEffect } from 'react';
//
// const HeaderBar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//
//   useEffect(() => {
//     const handleScroll = () => {
//       // Toggle background after 50px of scrolling
//       setIsScrolled(window.scrollY > 10);
//     };
//
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
//
//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
//         ? 'fixed top-0 bg-black shadow-md py-4'
//         : 'bg-transparent py-6'
//         }`}
//     >
//       <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//         <a href="/">
//           <img
//             src="/logo.png"
//             alt="Benjamin Bushnell Logo"
//             className={`transition-all w-auto drop-shadow-lg  duration-300 ease-in-out object-contain ${isScrolled ? 'h-16' : 'h-25'
//               }`}
//           />
//         </a>
//
//         <ul className={`flex space-x-8 font-bold text-lg transition-colors duration-300 text-white`}>
//           <li className="hover:opacity-70 cursor-pointer">
//             <a href="/" className="group relative inline-block">
//               <span>Home</span>
//               <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           </li>
//           <li className="hover:opacity-70 cursor-pointer">
//             <a href="/blog/1" className="group relative inline-block">
//               <span>Blog</span>
//               <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };
//
// export default HeaderBar;
import React, { useState, useEffect } from 'react';

const HeaderBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Track mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when resizing to desktop to prevent scrolling bugs
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog/1' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled || isOpen ? 'bg-black shadow-md py-4' : 'bg-transparent py-6'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="z-50">
          <img
            src="/logo.png"
            alt="Benjamin Bushnell Logo"
            className={`transition-all w-auto drop-shadow-lg duration-300 ease-in-out object-contain ${isScrolled ? 'h-16' : 'h-25'
              }`}
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-bold text-lg text-white">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:opacity-70 cursor-pointer">
              <a href={link.href} className="group relative inline-block">
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Mobile Only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden flex flex-col items-center justify-center space-y-8 bg-black/95 backdrop-blur-lg`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white hover:text-[#ff9776] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default HeaderBar;
