import { TextHeading } from "../ui/TextHeading";

const OurServices = () => {
    return (
        <div className="bg-[#E0E0FF] py-10 px-4">
            {/* <h1 className="text-3xl sm:text-5xl font-bold text-center mb-4">
                Our Services
            </h1> */}

            <TextHeading text_1="Our" text_2="Services"  addBreak={false} className="text-center py-5" />
            <p className="text-center max-w-3xl mx-auto mb-10 text-gray-700">
                In addition to our core developmental offerings, Open Door Sports provides a range of specialized programs and services designed to promote physical activity, engagement, and community building in fun and meaningful ways.
            </p>

            <div className="w-fit mx-auto flex gap-5 sm:gap-10">
                {/* Left Column */}
                <div className="space-y-5 sm:space-y-10">
                    {/* Top Left Box */}
                    <a
                        href="/services/sports"
                        className="relative w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]
                            rounded-tl-[50px] sm:rounded-tl-[100px]
                            overflow-hidden
                            flex items-center justify-center text-center
                            hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer
                            bg-[url('/ourServicesBg/sports.jpg')] bg-cover bg-center"
                    >
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <h1 className="text-xl sm:text-4xl font-semibold text-white">Sports events</h1>
                        </div>
                    </a>

                    {/* Bottom Left Box */}
                    <a
                        href="#"
                        className="relative w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]
                            rounded-bl-[50px] sm:rounded-bl-[100px]
                            overflow-hidden
                            flex items-center justify-center text-center
                            hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer
                            bg-[url('/ourServicesBg/sports.jpg')] bg-cover bg-center"
                    >
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <h1 className="text-xl sm:text-4xl font-semibold text-white">Training Camps</h1>
                        </div>
                    </a>
                </div>

                {/* Right Column */}
                <div className="mt-10 sm:mt-15 space-y-5 sm:space-y-10">
                    {/* Top Right Box */}
                    <a
                        href="#"
                        className="relative w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]
                            rounded-tr-[50px] sm:rounded-tr-[100px]
                            overflow-hidden
                            flex items-center justify-center text-center
                            hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer
                            bg-[url('/ourServicesBg/sports.jpg')] bg-cover bg-center"
                    >
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <h1 className="text-xl sm:text-4xl font-semibold text-white">birthday events</h1>
                        </div>
                    </a>

                    {/* Bottom Right Box */}
                    <a
                        href="#"
                        className="relative w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]
                            rounded-br-[50px] sm:rounded-br-[100px]
                            overflow-hidden
                            flex items-center justify-center text-center
                            hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer
                            bg-[url('/ourServicesBg/sports.jpg')] bg-cover bg-center"
                    >
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <h1 className="text-xl sm:text-4xl font-semibold text-white">Parent-Toddler</h1>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
