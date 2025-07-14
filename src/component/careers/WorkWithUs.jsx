import { FaCircle } from "react-icons/fa";

const WorkWithUs = () => {
    return (
        <div className="grid grid-cols-2 gap-6 p-4 md:p-10 ">
            <div className="col-span-1 space-y-4">
                <h1 className="text-heading-text text-3xl lg:text-4xl xl:text-5xl font-bold">
                    Why <span className="text-green-heading-text">Work With</span> Us
                </h1>
                <p className="text-body-text text-base md:text-lg">
                    Are you passionate about fitness, child development, and making a meaningful impact in children's lives?
                    Join the Open Door Sports team and be part of a growing movement that promotes holistic growth through physical activity and play.
                </p>
                <CareersImage />
                <CareersImage />
            </div>
            <div className="space-y-4">
                <CareersImage />
                <CareersImage />
                {/* <div
                    className="w-fit float-right -rotate-10"> 
                    <FaCircle className="text-[#33D9EF]"/>
                    <FaCircle
                        className="text-[#33EFA0] mt-10 ml-10 text-4xl lg:text-5xl"
                    />
                </div> */}
                <TwoDotCircle />
            </div>
        </div>
    );
};

export default WorkWithUs;

const CareersImage = () => {
    return (
        <div className="w-full h-[150px] sm:h-[300px] md:h-[400px] bg-amber-300 rounded-xl shadow-md">
            {/* Replace with an image or content */}
        </div>
    )
}


const TwoDotCircle = ({ className }) => {
    return (
        <div
            className={`w-fit float-right -rotate-10 ${className}`}>
            <FaCircle className="text-[#33D9EF]" />
            <FaCircle
                className="text-[#33EFA0] mt-10 ml-10 text-4xl lg:text-5xl"
            />
        </div>
    )
}
export { TwoDotCircle }; 