'use client';

import { motion } from 'framer-motion';

// You can also define the animation directly here if not importing:
const item = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function LeftSideBlock() {
  return (
    <motion.div
      className="w-full md:w-1/2   md:mt-0  text-center md:text-left"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={item}
    >
      <h1 className="text-3xl  lg:text-4xl xl:text-5xl font-bold text-[#1a237e] leading-tight">
        COME, LET’S PLAY <br />
        <span className="text-teal-500">TOGETHER</span>
      </h1>

      <p className="font-hand text-orange-400 text-xl sm:text-2xl md:text-2xl xl:text-4xl tracking-[0.2em] rotate-[-4deg] mt-3">
        Have an outsized impact
      </p>

      <button className="mt-14 px-6 py-2 border border-purple-300 rounded-full text-purple-600 hover:bg-purple-100 transition duration-300 cursor-pointer">
        Join Us
      </button>
    </motion.div>
  );
}
