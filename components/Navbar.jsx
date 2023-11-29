import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = (event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offset = 36;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-9 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center`}>
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          <div className="main-logo">calderon <span className="gradient-text">dev </span>
          </div>
        </h2>

        <div className="flex items-center">
          <ul className="hidden md:flex md:flex-row">
            <li><a href="#about" className="block py-4 px-6 text-white" onClick={handleMenuItemClick}>About Me</a></li>
            <li><a href="#skills" className="block py-4 px-6 text-white" onClick={handleMenuItemClick}>Skills</a></li>
            <li><a href="#projects" className="block py-4 px-6 text-white" onClick={handleMenuItemClick}>Projects</a></li>
            <li><a href="#insightProjects" className="block py-4 px-6 text-white" onClick={handleMenuItemClick}>Blog</a></li>
            <li><a href="#contact" className="block py-4 px-6 text-white" onClick={handleMenuItemClick}>Contact</a></li>
          </ul>

          {!isMenuOpen && (
            <button type="button" onClick={() => setIsMenuOpen(true)} className="ml-4 md:hidden">
              <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
            </button>
          )}
        </div>

        <ul className={`fixed top-0 right-0 h-full w-full bg-gray-800 transform translate-x-full transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : ''} md:hidden flex flex-col items-center`}>
          <li className="mt-4 mb-4">
            <a href="#new-about" className="block py-4 px-8 text-white" onClick={handleMenuItemClick}>
              <div className="main-logo">calderon <span className="gradient-text">dev </span>
              </div>
            </a>
          </li>
          <li><a href="#about" className="block py-4 px-8 text-white" onClick={handleMenuItemClick}>About Me</a></li>
          <li><a href="#skills" className="block py-4 px-8 text-white" onClick={handleMenuItemClick}>Skills</a></li>
          <li><a href="#projects" className="block py-4 px-8 text-white" onClick={handleMenuItemClick}>Projects</a></li>
          <li><a href="#insightProjects" className="block py-4 px-8 text-white" onClick={handleMenuItemClick}>Insight Projects</a></li>
          <li><a href="#contact" className="block py-4 px-8 text-white" onClick={handleMenuItemClick}>Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
