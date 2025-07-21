'use client';

import SlideInView from '../animation/SlideInView';

export default function LeftSideBlock({
  text_1 = "COME, LET’S PLAY",
  text_2 = "TOGETHER"
}) {
  return (
    <SlideInView direction="left" delay={0.4} className="w-full md:w-1/2">
      <div className="md:mt-0 text-center md:text-left">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a237e] leading-tight">
          {text_1} <br />
          <span className="text-teal-500">{text_2}</span>
        </h1>

        <p className="font-hand text-orange-400 text-xl sm:text-2xl md:text-2xl xl:text-4xl tracking-[0.2em] rotate-[-4deg] mt-3">
          Have an outsized impact
        </p>

        <button className="mt-14 px-6 py-2 border border-purple-300 rounded-full text-purple-600 hover:bg-purple-100 transition duration-300 cursor-pointer">
          Enroll Now
        </button>
      </div>
    </SlideInView>
  );
}
