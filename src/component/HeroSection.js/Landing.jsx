'use client';

import RightSideBlock from './RightSideBlock';
import LeftSideBlock from './LeftSideBlock';


export default function HeroSection() {
  return (
    <section className="flex  flex-row flex-wrap items-center justify-between mt-25 md:px-10 lg:px-16 h-auto ">
      <LeftSideBlock />
      <RightSideBlock />
    </section>
  );
}
