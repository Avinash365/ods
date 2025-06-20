'use client';

import { NavLink } from "./Navbar";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

export const Dropdown = ({ onClose }) => {
  const linkBorder = "border-b border-blue w-full";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.5,
      }}
      className="flex flex-col gap-3 w-[250px] h-auto bg-white border border-white rounded-sm shadow-md p-3 "
    >
      <RxCross2
        className="cursor-pointer mx-auto mr-2 text-nav-text w-[20px] h-[20px]"
        onClick={onClose}
      />
      <NavLink to="/" text="Home" className={linkBorder} />
      <NavLink to="/about" text="About Us" className={linkBorder} />
      <NavLink to="/gallery" text="Gallery" className={linkBorder} />
      <NavLink to="/services" text="Services" className={linkBorder} />
      <NavLink to="/contact" text="Contact Us" className={linkBorder} />


    </motion.div>
  );
};
