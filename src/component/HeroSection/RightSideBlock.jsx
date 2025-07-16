'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// Animation container with staggered child animations
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 1.2,
      delayChildren: 1.2, // Optional: delay before first child animates
    },
  },
};

// Item animation variant with increased duration
const item = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 2.2, ease: 'easeOut' }, // ← increased from 0.5 to 0.8
  },
};

export default function RightSideBlock() {
  const [scales, setScales] = useState([false, false, false, false, false]);
  const [zind, setZind] = useState([1, 1, 1, 1, 1]);

  const toggleScale = (index) => {
    const newScales = scales.map((_, i) => (i === index ? !scales[i] : false));
    const newZind = zind.map((_, i) => (i === index && !scales[i] ? 50 : 1));
    setScales(newScales);
    setZind(newZind);
  };

  return (
    <motion.div
      className="grid grid-cols-3 gap-4 w-full md:w-1/2 min-w-[300px] mt-10 md:mt-0 ml-0"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      {/* Left Block (2/3 width) */}
      <motion.div className="col-span-2 h-[430px] flex flex-col justify-between">
        <div className="flex-1 flex gap-2">
          {/* Box 0 */}
          <motion.div
            className={`w-1/2 bg-[url('/thumbnail/1.jpg')] bg-cover bg-center h-[150px] mt-auto cursor-pointer z-[${zind[0]}]`}
            variants={item}
            onClick={() => toggleScale(0)}
            animate={{ scale: scales[0] ? 1.1 : 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          {/* Box 1 */}
          <motion.div
            className={`w-1/2 h-full bg-[url('/thumbnail/6.jpg')] bg-cover bg-center cursor-pointer z-[${zind[1]}]`}
            variants={item}
            onClick={() => toggleScale(1)}
            animate={{ scale: scales[1] ? 1.1 : 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </div>
        {/* Box 2 */}
        <motion.div
          className={`h-[150px] bg-[url('/thumbnail/7.jpg')] bg-cover bg-center mt-2 w-[90%] ml-auto cursor-pointer z-[${zind[2]}]`}
          variants={item}
          onClick={() => toggleScale(2)}
          animate={{ scale: scales[2] ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </motion.div>

      {/* Right Block (1/3 width) */}
      <motion.div className="col-span-1 flex flex-col gap-2">
        {/* Box 3 */}
        <motion.div
          className={`h-[150px] bg-[url('/thumbnail/13.jpg')] bg-cover bg-center cursor-pointer z-[${zind[3]}]`}
          variants={item}
          onClick={() => toggleScale(3)}
          animate={{ scale: scales[3] ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        {/* Box 4 */}
        <motion.div
          className={`h-[280px] bg-[url('/thumbnail/3.jpg')] bg-cover bg-center cursor-pointer z-[${zind[4]}]`}
          variants={item}
          onClick={() => toggleScale(4)}
          animate={{ scale: scales[4] ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </motion.div>
    </motion.div>
  );
}
