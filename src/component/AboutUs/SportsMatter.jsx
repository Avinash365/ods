import { TextHeading } from "../ui/TextHeading";
import whySports from "@/data/whySports";
import { BenefitItem } from "../parentToddler/Benefits";
import FadeInOnView from "../animation/FadeInOnView";


const SportsMatter = () => {
    const { heading, items } = whySports;
    return (
        <FadeInOnView delay={0.8}>
            <div className="px-8 md:px-30 space-y-20 mb-20 mt-15">
                <TextHeading
                    text_1={heading.text_1}
                    text_2={heading.text_2}
                    addBreak={heading.addBreak}
                    className={heading.className}
                />
                <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-y-10 mt-10">
                    {items.map((item, index) => (
                        <div key={index} className={`flex justify-center ${item.colStart}`}>
                            <BenefitItem text={item.text} logo={item.logo} />
                        </div>
                    ))}
                </div>
            </div>
        </FadeInOnView>

    )
}
export default SportsMatter; 
