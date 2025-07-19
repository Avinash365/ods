import { TextHeading } from "../ui/TextHeading";

const ProgramBenefits = () => {
  const benefitList = [
    {
      text: "Encourages early language and communication development.",
      colStart: "md:col-start-2 md:row-start-1", // center in 5-col grid
    },
    {
      text: "Fosters stronger emotional bonding between parent and child.",
      colStart: "md:col-start-4 md:row-start-1",
    },
    {
      text: "Promotes social interaction and peer learning.",
      colStart: "md:col-start-1 md:row-start-2",
    },
    {
      text: "Supports physical coordination through movement-based play.",
      colStart: "md:col-start-3 md:row-start-2",
    },
    {
      text: "Introduces structured routines and environments for toddlers.",
      colStart: "md:col-start-5 md:row-start-2",
    },
  ];

  return (
    <div className="px-8 md:px-30 space-y-20 mb-20">
      <TextHeading
        text_1="Benefits of the"
        text_2="Parent-Toddler Program"
        addBreak={false}
        className="text-center"
      />

      <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-y-10 mt-10">
        {benefitList.map((item, index) => (
          <div key={index} className={`flex justify-center ${item.colStart}`}>
            <BenefitItem text={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramBenefits;

const BenefitItem = ({ text }) => {
  return (
    <div className="w-[250px] flex flex-col items-center text-center space-y-4">
      <div className="w-[50px] h-[50px] rounded-full bg-amber-300" />
      <p className="text-lg">{text}</p>
    </div>
  );
};
