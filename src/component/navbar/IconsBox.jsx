'use client'

import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { LuSquareMenu } from "react-icons/lu";
import { Dropdown } from "./Dropdown";
import { AnimatePresence , motion} from "framer-motion";



export const IconsBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconStyle = "w-6 h-6 text-nav-text cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-purple-500";

  return (
    <div className="gap-6 flex items-center">
      {/* Desktop icons */}
      <FaFacebook className={`${iconStyle} hidden xl:block`} />
      <FaInstagram className={`${iconStyle} hidden xl:block`} />
      <BsWhatsapp className={`${iconStyle} hidden xl:block`} />
      <FaYoutube className={`${iconStyle} hidden xl:block`} />

      {/* Mobile menu icon */}
      <div className="relative  lg:hidden cursor-pointer">
        <LuSquareMenu
          className={iconStyle}
          onClick={() => setIsOpen(!isOpen)}
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3, // Make this match the Dropdown transition
              }}

              className="absolute right-0 top-6 bg-[#7B7EEE]/20 p-1 border-2 border-white"
            >
              <Dropdown onClose={() => setIsOpen(false)} />

            </motion.div>
          )}
        </AnimatePresence>

      </div>


    </div>
  );
};
