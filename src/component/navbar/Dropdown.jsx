'use client';

import { NavLink } from "./Navbar";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

export const Dropdown = ({ onClose }) => {
  const linkBorder = "border-b border-blue w-full";

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.5,
      }}
      className="flex flex-col gap-3 w-[250px] h-screen bg-white border border-white rounded-sm shadow-md p-3 z-50"
    >
      {/* Close Button */}
      <RxCross2
        className="ml-auto mr-2 cursor-pointer text-blue-500 w-5 h-5 hover:scale-110 transition-transform"
        onClick={onClose}
      />

      {/* Nav Links */}
      <NavLink to="/" text="Home" className={linkBorder} />
      <NavLink to="/about" text="About Us" className={linkBorder} />
      <NavLink to="/gallery" text="Gallery" className={linkBorder} />
      <NavLink to="/services" text="Services" className={linkBorder} />
      <NavLink to="/contact" text="Contact Us" className={linkBorder} />
    </motion.div>
  );
};
