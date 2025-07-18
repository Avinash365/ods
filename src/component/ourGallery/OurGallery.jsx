'use client';

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import youtubeVideoLinks from "@/data/youtubeVideoLink";
import { TextHeading } from "../ui/TextHeading";

// GalleryCard Component
const GalleryCard = ({ thumbnail, title, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block min-w-[250px] min-h-[300px] md:min-w-[349px] md:min-h-[488px] rounded-2xl overflow-hidden bg-amber-200 shadow-md hover:scale-105 transition duration-300 cursor-pointer"
    >
      <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
    </a>
  );
};

// HorizontalGallery with only button scrolling
const HorizontalGallery = () => {
  const scrollRef = useRef(null);

  const scrollByOffset = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mt-10 mb-10 px-4">
      {/* Navigation Arrows */}
      <button
        onClick={() => scrollByOffset(-300)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:bg-gray-200"
      >
        <FaChevronLeft  className="cursor-pointer"/>
      </button>
      <button
        onClick={() => scrollByOffset(300)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:bg-gray-200"
      >
        <FaChevronRight className="cursor-pointer"/>
      </button>

      {/* Scrolling Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide scrollbar-hidden px-8"
      >
        {[...Array(6)].map((_, index) => (
          <GalleryCard
            key={index}
            title="Birthday Celebration"
            thumbnail="https://acpolibiz.com/wp-content/uploads/2024/05/birthday-party.jpg"
            url="https://acpolibiz.com/wp-content/uploads/2024/05/birthday-party.jpg"
          />
        ))}
      </div>
    </div>
  );
};

// OurGallery Component
const OurGallery = () => {
  return (
    <div className="p-4 mt-10">
      <TextHeading text_1="Our Gallery"  className="text-center" />

      {/* Horizontal gallery with buttons */}
      <HorizontalGallery />

      {/* Static grid-based video gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {youtubeVideoLinks.map((video, index) => (
          <a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <img
              src={`https://img.youtube.com/vi/${video.videoId}/0.jpg`}
              alt={video.title}
              className="w-full aspect-square object-cover rounded-lg shadow-md"
            />
            <p className="text-center mt-2 text-sm font-medium">{video.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurGallery;
