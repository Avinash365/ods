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
      className="flex flex-col gap-2 w-[250px] h-screen overflow-scroll bg-white border border-white rounded-sm shadow-md p-3 pb-15"
    >
      <RxCross2
        className="cursor-pointer mx-auto mr-2 text-nav-text min-w-[20px] max-h-[20px]"
        onClick={onClose}
      />
      <NavLink to="/" text="Home" className={linkBorder} />
      <NavLink to="/aboutUs" text="About Us" className={linkBorder} />
      {/* <NavLink to="/services/sports" text="Services" className={linkBorder} /> */}
      <NavLink to="/services/parentToddler" text="Parent-Toddler" className={linkBorder}/>
      <NavLink to="/" text="Integrated Program" className={linkBorder}/>
      <NavLink to="/careers" text="Careers" className={linkBorder} />
      <NavLink to="/services/sports" text="Sports" className={linkBorder} />
    </motion.div>
  );
};
