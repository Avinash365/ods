import { JoinUsBtn } from "../navbar/JoinUsBtn";

export const Landing = () => {
  return (
    <div className="hero-bg w-full h-[950px] ">
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="mt-40">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] mt-2 text-heading-text">
            COME, LET’S PLAY <span className="gradient-text">TOGETHER.</span>
          </h1>
          <p className="font-bold text-sm sm:text-base md:text-lg text-body-text max-w-2xl mx-auto mt-10 mb-6">
            This program helps the youth use sports for holistic development, through direct implementation of sporting programs, training of sports trainers and supporting grassroots sports administration.
          </p>
          <JoinUsBtn className="translate-y-10 shadow-lg" />
        </div>

        <div className="flex gap-[6vw] mt-10">
          <ImgCard />
          <ImgCard className="translate-y-10 shadow-lg" />
          <ImgCard />
        </div>
      </div>
    </div>
  );
};

const ImgCard = ({ className = "" }) => {
  return (
    <div className={`relative w-[20vw] h-[30vw] rounded-full overflow-hidden  ${className}`}>
      <img
        src="/3.jpg"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
