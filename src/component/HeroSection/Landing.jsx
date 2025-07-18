'use client';

import RightSideBlock from './RightSideBlock';
import LeftSideBlock from './LeftSideBlock';


export default function HeroSection({text_1, text_2}) {
  return (
    <section className="flex  flex-row flex-wrap items-center justify-between mt-25 md:px-10 lg:px-16 h-auto ">
      <LeftSideBlock text_1={text_1} text_2={text_2}/>
      <RightSideBlock />
    </section>
  );
}
