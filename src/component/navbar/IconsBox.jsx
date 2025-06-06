'use client'

import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { Dropdown } from "./Dropdown"; // assuming it's exported correctly

export const IconsBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="gap-6 flex items-center">
      {/* Show only on xl and above */}
      <FaFacebook className="w-6 h-6 text-nav-text cursor-pointer hidden xl:block" />
      <FaInstagram className="w-6 h-6 text-nav-text cursor-pointer hidden xl:block" />
      <BsWhatsapp className="w-6 h-6 text-nav-text cursor-pointer hidden xl:block" />
      <FaYoutube className="w-6 h-6 text-nav-text cursor-pointer hidden xl:block" />

      {/* Mobile Menu Toggle */}
      <div className="relative mr-10 lg:hidden cursor-pointer">
        <TiThMenu
          className="w-6 h-6 text-nav-text cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <div className="absolute right-0 top-8 bg-white p-1 shadow z-50">
            <Dropdown />
          </div>
        )}
      </div>
    </div>
  );
};
