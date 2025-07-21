'use client';

import { useEffect, useRef } from "react";
import SportsCard from "@/component/ui/SportsCard";
import CustomAboutSection from "@/component/ui/CustomAboutSection";
import { VerticalLine } from "@/component/ui/Divider";
import CurriImages from "@/component/curriculum/CurriImages";
import sportsEventsData from "@/data/sportsEventsData";

const Sports = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 1;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollAmount;

        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/*  Fixed Fullscreen Video Background */}
      <div className="fixed top-0 left-0 w-full h-[400px] lg:h-[100vh] -z-10">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/zYhBJoBUSYA?si=OELTmC1qV8xWJo1F&autoplay=1&mute=1&loop=1&playlist=zYhBJoBUSYA"
          title="Introduction Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/*  Section Title Over Video */}
      <div className="w-full h-[400px] lg:h-screen bg-white/20 flex items-end pb-20 px-10">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white">Sports Events</h1>
      </div>

      {/* Auto-Scrolling Cards Section */}
      <div
        ref={scrollRef}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="flex overflow-x-scroll justify-between items-center bg-white"
      >
        {sportsEventsData.events.map((item, index) => (
          <div key={index} className="flex items-center">
            <SportsCard
              title={item.title}
              subTitle={item.subTitle}
              logo={item.logo}
            />
            {index !== sportsEventsData.events.length - 1 && <VerticalLine />}
          </div>
        ))}
      </div>

      {/* About Section from JSON */}
      <CustomAboutSection
        title={sportsEventsData.about.title}
        subTitle={sportsEventsData.about.subTitle}
        imagePath={sportsEventsData.about.imagePath}
        bgColor={sportsEventsData.about.bgColor}
        headingDotColor={sportsEventsData.about.headingDotColor}
        textColor={sportsEventsData.about.textColor}
        content={sportsEventsData.about.content}
        videoUrl={sportsEventsData.about.videoUrl}
        clampLines={sportsEventsData.about.clampLines}
        className="md:pt-30"
      />

      {/* Images/Visual Section */}
      <div className="bg-white">
        <CurriImages />
      </div>
    </>
  );
};

export default Sports;
