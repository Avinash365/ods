'use client';
import { useState } from "react";
import Link from 'next/link';
import { SchoolName } from './SchoolName';
import { IconsBox } from './IconsBox';
import { JoinUsBtn } from './JoinUsBtn';
import { AnimatePresence, motion } from "framer-motion";

import { ServiceMenu } from "./serviceMenu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="fixed top-0 z-50 w-full py-2 px-4 lg:pr-10 flex items-center justify-between bg-white shadow-md">
      
      {/* Left: Logo + School Name */}
      <div className="flex items-center gap-4">
        {/* <img src="./logo.png" width={80} alt="Logo" /> */}
        <SchoolName />
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex gap-3 h-[65px] items-center relative">
        <NavLink to="/" text="Home" />
        <NavLink to="/about" text="About Us" />
        
        {/* Services with Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown}>
            <NavLink to="#" text="Services" />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-10 -left-40 bg-[#7B7EEE]/20 p-2 border-2 border-white rounded-md shadow-lg z-50"
              >
                <ServiceMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <NavLink to="/gallery" text="Gallery" />
        <NavLink to="/careers" text="Careers" />
      </div>

      {/* Right Side: CTA + Icons */}
      <div className="hidden lg:block">
        <JoinUsBtn />
      </div>

      <div className="items-center gap-2">
          <IconsBox />
      </div> 

    </div>
  );
};

export const NavLink = ({ to, text, className = '' }) => {
  return (
    <Link
      href={to}
      className={`hover:border-b-4 border-[#7B7EEE] h-12 p-3 text-nav-text font-medium text-[18px] transition duration-200 ${className}`}
    >
      {text}
    </Link>
  );
};
