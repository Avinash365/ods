'use client'
import { useState } from "react";
import { FaCircle } from "react-icons/fa";

const WorkWithUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="grid grid-cols-2 gap-6 p-8 md:p-20">
            {/* Left Column */}
            <div className="col-span-1 space-y-4">
                <h1 className="text-heading-text text-3xl lg:text-4xl xl:text-5xl font-bold">
                    Why <span className="text-green-heading-text">Work With</span> Us
                </h1>
                <p className={`text-body-text text-base md:text-lg text-justify transition-all duration-300 ease-in-out ${isExpanded ? '' : 'line-clamp-3 md:line-clamp-4'}`}>
                    Are you passionate about fitness, child development, and making a meaningful impact in children's lives?
                    Join the Open Door Sports team and be part of a growing movement that promotes holistic growth through physical activity and play.
                    By working with us, you’ll play an essential role in helping kids build confidence, learn new skills, and stay physically active in a safe and inclusive environment.
                </p>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-500 hover:underline focus:outline-none cursor-pointer"
                >
                    {isExpanded ? "Read less" : "Read more"}
                </button>

                <CareersImage className={"hidden sm:block"} />
                <CareersImage />
            </div>

            {/* Right Column */}
            <div className="space-y-4 mt-10 flex flex-col items-center">
                <CareersImage />
                <CareersImage />
                <TwoDotCircle className="mr-5 ml-auto  sm:mt-20" />
            </div>
            <TwoDotCircleWithRectangle />
        </div>
    );
};

export default WorkWithUs;

const CareersImage = ({ className }) => {
    return (
        <div className={`w-[80%]  aspect-square bg-amber-300 rounded-xl shadow-md ${className}`}>
            {/* Replace with an image or content */}
        </div>
    );
};

const TwoDotCircle = ({ className }) => {
    return (
        <div className={`w-fit float-right  -rotate-10 ${className}`}>
            <FaCircle className="text-[#33D9EF]" />
            <FaCircle className="text-[#33EFA0] mt-10 ml-10 text-4xl lg:text-5xl" />
        </div>
    );
};

const TwoDotCircleWithRectangle = ({ className = "" }) => {
    return (
        <div className={`relative flex items-start ${className}`}>
            {/* Dots */}
            <div className="rotate-90 space-y-10">
                <FaCircle className="text-[#F3A268] text-xl" />
                <FaCircle className="text-[#687EF3] text-5xl lg:text-5xl ml-10" />
            </div>

            {/* Rectangle */}
            <div className="absolute bottom-2 left-1 bg-[#CDD8FF] w-[80px] h-[20px] rounded-xl" />
        </div>
    );
};


export { TwoDotCircle };



