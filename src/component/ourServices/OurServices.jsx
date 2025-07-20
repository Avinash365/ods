'use client'
import { TextHeading } from "../ui/TextHeading";
import { motion } from 'framer-motion';

const OurServices = () => {
  return (
    <div className="bg-[#E0E0FF] py-10 pb-20 px-4 relative overflow-hidden">
      {/* Rotating decorative circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#A0A0F0] opacity-20 rounded-full -top-10 -left-10 z-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <TextHeading
          text_1="Our"
          text_2="Services"
          addBreak={false}
          className="text-center py-5"
        />
        <p className="text-center max-w-3xl mx-auto mb-10 text-gray-700">
          In addition to our core developmental offerings, Open Door Sports
          provides a range of specialized programs and services designed to
          promote physical activity, engagement, and community building in fun
          and meaningful ways.
        </p>

        <div className="w-fit mx-auto flex gap-5 sm:gap-10">
          {/* Left Column */}
          <div className="space-y-5 sm:space-y-10">
            <ServiceBox
              href="/services/sports"
              title="Sports Events"
              className="rounded-tl-[50px] sm:rounded-tl-[100px] bg-[url('/ourServicesBg/sports.jpg')]"
            />
            <ServiceBox
              href="#"
              title="Integrated Program"
              className="rounded-bl-[50px] sm:rounded-bl-[100px] bg-[url('/ourServicesBg/sports.jpg')]"
            />
          </div>

          {/* Right Column */}
          <div className="mt-10 sm:mt-15 space-y-5 sm:space-y-10">
            <ServiceBox
              href="#"
              title="Birthday Events"
              className="rounded-tr-[50px] sm:rounded-tr-[100px] bg-[url('/ourServicesBg/birthday.jpg')]"
            />
            <ServiceBox
              href="#"
              title="Parent-Toddler"
              className="rounded-br-[50px] sm:rounded-br-[100px] bg-[url('/ourServicesBg/parentToddler.jpg')]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ServiceBox = ({ href, title, className }) => {
  return (
    <a
      href={href}
      className={`relative w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] 
        ${className}
        overflow-hidden
        flex items-center justify-center text-center
        hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer
        bg-cover bg-center`}
    >
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-xl sm:text-4xl font-semibold text-white">{title}</h1>
      </div>
    </a>
  );
};

export default OurServices;
