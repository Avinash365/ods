'use client';

import { NavLink } from "./Navbar";
import { motion } from "framer-motion";



export const ServiceMenu = () => {
     const linkBorder = "border-b border-blue w-fit h-15";
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
            className="grid grid-cols-2 gap-2 w-[400px] h-[250px] bg-white border border-white rounded-sm shadow-md p-2"
        > 
    
        <NavLink to="/services/sports" text="Sports"  className={linkBorder}/>
        <NavLink to="/" text="Birthday Events" className={linkBorder}/>
        <NavLink to="/services/parentToddler" text="Parent-Toddler" className={linkBorder}/>
        <NavLink to="/" text="Integrated Program" className={linkBorder}/>
        <NavLink to="#curriculum" text="Our Programs" className={linkBorder}/>

        </motion.div>
    )

}