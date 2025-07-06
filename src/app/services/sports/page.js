'use client';

import { useEffect, useRef } from "react";
import SportsCard from "@/component/ui/SportsCard";
import CustomAboutSection from "@/component/ui/CustomAboutSection";

const Sports = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 1;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollAmount;

        // Reset to start if fully scrolled
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20); // adjust speed
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 🎥 Fixed Fullscreen Video Background */}
      <div className="fixed top-0 left-0 w-full h-[100vh] -z-10">
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

      {/* 🏷️ Section Title Over Video */}
      <div className="w-full h-screen bg-white/20 flex items-end pb-20 px-10">
        <h1 className="text-4xl font-bold text-white">Sports Events</h1>
      </div>

      {/* 🏃‍♂️ Horizontally Auto-Scrolling Cards */}
      <div
        ref={scrollRef}
        style={{
          scrollbarWidth: "none",     // Firefox
          msOverflowStyle: "none",    // IE/Edge
        }}
        className="flex overflow-x-scroll bg-white py-10"
      >
        <SportsCard
          title="TENNIS CLUB"
          subTitle="Consecteture adipiscing elit sed do euismod tempo."
        />
        <SportsCard
          title="TOP COACHES"
          subTitle="Consecteture adipiscing elit sed do euismod tempo."
        />
        <SportsCard
          title="ONLINE STORE"
          subTitle="Consecteture adipiscing elit sed do euismod tempo."
        />
        <SportsCard
          title="24/7 SUPPORT"
          subTitle="Consecteture adipiscing elit sed do euismod tempo."
        />
      </div>

      {/* 🧠 Custom About Section */}
      <CustomAboutSection
        title="Celebrate Movement,"
        subTitle="Competition and Team Spirit"
        imagePath="/custom-bg.png"
        bgColor="#FFFFFF"
        headingDotColor="#00CBB8"
        textColor="#1f2937"
        content="We aim to make learning joyful and purposeful for every child by combining creativity, sports, and emotional development through customized programs and expert mentors."
        videoUrl="https://www.youtube.com/embed/zYhBJoBUSYA?autoplay=1&mute=1"
        clampLines={3}
        className="md:pt-30"
      />
    </>
  );
};

export default Sports;
