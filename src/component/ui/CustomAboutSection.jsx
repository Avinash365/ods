'use client';

import { FaCircle } from "react-icons/fa";
import { useState } from "react";
import { TextHeading } from "./TextHeading";

export const CustomAboutSection = ({
  title = "About Us",
  subTitle = "Open Door Sports",
  bgColor = "#00CBB8",
  headingDotColor = "#33EFA0",
  textColor = "#696984",
  content = "Open Door Sports is a dedicated organization committed to fostering the overall gross motor development of children through thoughtfully curated physical activities and sports programs. We strive to create inclusive environments where children of all abilities can explore, play, and grow through movement. Our expert-designed sessions promote coordination, strength, balance, and social interaction to build confidence and a love for being active.",
  videoUrl = "https://www.youtube.com/embed/kdCUNPX8fz4?autoplay=1&mute=1",
  clampLines = 4,
  className = "",
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className={`grid grid-cols-1 md:grid-cols-2 gap-10 px-10 lg:px-16 py-16 pb-24 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Left Content */}
      <div className="relative z-10">
        <div className="relative inline-block mb-6">
          <FaCircle
            className="absolute lg:top-0 -left-4 text-4xl lg:text-5xl z-0"
            style={{ color: headingDotColor }}
          />
          <TextHeading text_1={title} text_2={subTitle} className="relative z-10" />
        </div>

        <p
          className={`text-xl lg:text-2xl font-normal leading-relaxed mb-4 transition-all duration-300 ease-in-out ${
            expanded ? "" : `line-clamp-${clampLines}`
          }`}
          style={{ color: textColor }}
        >
          {content}
        </p>

        <a
          className="underline cursor-pointer text-lg lg:text-2xl"
          style={{ color: textColor }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Learn more"}
        </a>
      </div>

      {/* Right Content (Video) */}
      <div className="relative z-10">
        <div className="w-[100px] h-[110px] bg-[#2F327D] absolute -left-4 -top-4 rounded-2xl -z-10"></div>

        <div className="relative z-10 rounded-lg overflow-hidden aspect-video w-full">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CustomAboutSection;
