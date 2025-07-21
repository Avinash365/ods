'use client';

import { FaCircle } from "react-icons/fa";
import { useState } from "react";
import { TextHeading } from "../ui/TextHeading";
import SlideInView from "../animation/SlideInView";

export const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);
  const discription = `Open Door Sports is a dedicated organization committed to fostering
            the overall gross motor development of children through thoughtfully
            curated physical activities and sports programs. We strive to create
            inclusive environments where children of all abilities can explore,
            play, and grow through movement. Our expert-designed sessions
            promote coordination, strength, balance, and social interaction to
            build confidence and a love for being active`

  return (
    <section className="-mt-[50px]">
      <img src="./image.png" alt="Decorative background" className="w-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 lg:px-16 py-15 pb-50 bg-[#00CBB8] -mt-2">
        {/* Left Content */}
        <SlideInView direction="left">
          <div className="relative z-10">
            <div className="relative inline-block mb-6">
              <FaCircle
                //   size={60}
                className="absolute lg:top-2 -left-4  text-[#33EFA0] z-0 text-4xl lg:text-5xl"
              />
              <TextHeading text_1="About Us" className="relative z-10" />

            </div>

            <p
              className={` font-normal leading-relaxed text-[#696984] mb-4 transition-all duration-300 ease-in-out ${expanded ? '' : 'line-clamp-4'
                }`}
            >
              {discription}
            </p>
            <a
              href="/aboutUs"
              className="underline cursor-pointer text-[#696984]"
            >
              Learn more
            </a>
          </div>
        </SlideInView>

        {/* Right Content (Video) */}
        <SlideInView direction="right" delay={0.2}>
          <div className="relative z-10">
            {/* Top Decoration */}
            <div className="w-[100px] h-[110px] bg-[#2F327D] absolute -left-4 -top-4 rounded-2xl -z-10"></div>
            {/* Responsive Video */}
            <div className="relative z-10 rounded-lg overflow-hidden aspect-video w-full ">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dpLtvTG3XK0?si=-5h_O9N2ap4gaInU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </SlideInView>
      </div>
    </section>
  );
};

export default AboutUs;
