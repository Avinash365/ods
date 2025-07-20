import { TextHeading } from "../ui/TextHeading";
import Button from "../ui/Button";
import Enhancekey from "@/component/AboutUs/Enhancekey";
import SportsMatter from "./SportsMatter";
import aboutUsData from "@/data/aboutUsData";
import RightSideBlock from "../HeroSection/RightSideBlock";

const AboutUsPage = () => {
  return (
    <div>
      <section className="mt-25 sm:mt-30 space-y-6 px-10 lg:px-20 xl:px-40 2xl:px-60">
        <TextHeading text_1="About Us" className="text-center" />

        <div className="flex justify-center">
          <Button text="Home/AboutUs" />
        </div>

        <UnlockingBox />
        <Enhancekey />
      </section>

      <SportsMatter />
    </div>
  );
};

export default AboutUsPage;

const UnlockingBox = () => {
  const { discription } = aboutUsData;

  return (
    <section className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-8 sm:mb-30">
      <div className="space-y-4 max-w-[500px]">
        <h1 className="font-bold text-2xl md:text-3xl text-heading-text">
          {discription.title_1}
          <span className="text-green-heading-text"> {discription.title_2}</span>
        </h1>
        <p className="text-sm text-justify leading-relaxed">{discription.dis}</p>
      </div>
      <RightSideBlock/>
    </section>
  );
};

const Box = () => {
  return (
    <div className="w-[110px] h-[110px] rounded-2xl shadow bg-amber-100" />
  );
};
