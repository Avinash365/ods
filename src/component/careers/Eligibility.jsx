import { TiInputChecked } from "react-icons/ti";
import { TwoDotCircle } from "./WorkWithUs"

const Eligibility = () => {
    return (
        <div className="px-4 md:px-8">
            <h1
                className="text-heading-text text-3xl lg:text-4xl xl:text-5xl font-bold text-center mt-10">
                Who We’re <span className="text-green-heading-text">Looking</span> For
            </h1>
            <div className="w-fit mx-auto space-y-6 mt-10">
                <Skill skill="Experience in handling children across various age groups." />
                <Skill skill="A genuine passion for fitness and child development." />
                <Skill skill="Strong communication and leadership skills." />
                <Skill skill="The ability to motivate and engage children in a fun and positive manner." />
                <Skill skill="A certification in physical education or sports training (preferred but not mandatory)" />
            </div>
            <div
                className="float-left mt-6 sm:ml-20">
                <TwoDotCircle className="rotate-90"/>
            </div>

        </div>
    )
}
export default Eligibility;


const Skill = ({ skill }) => {
    return (
        <div className="flex min-h-20 max-h-12  gap-4 md:gap-10  items-center">
            <TiInputChecked className="min-w-[25px] min-h-[25px] text-[#687EF3]" />
            <p className="text-base sm:text-[25px]">{skill}</p>
        </div>
    ) 
}   
