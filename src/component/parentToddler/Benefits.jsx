import { TextHeading } from "../ui/TextHeading";
import ParentToddlerBenefits from "@/data/ParentToddlerBenefits";

const ProgramBenefits = () => {
  const { heading, items } = ParentToddlerBenefits;

  return (
    <div className="px-8 md:px-30 space-y-20 mb-20">
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
  );
};

const BenefitItem = ({ text, logo }) => {
  return (
    <div className="w-[250px] flex flex-col items-center text-center space-y-4">
      <div className="w-[50px] h-[50px] rounded-full bg-amber-300 flex items-center justify-center overflow-hidden">
        <img src={logo} alt="benefit icon" className="w-6 h-6" />
      </div>
      <p className="">{text}</p>
    </div>
  );
};


export default ProgramBenefits;
export {BenefitItem}; 