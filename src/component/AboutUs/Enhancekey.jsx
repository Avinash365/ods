import { FeatureBlock, ImageRight, ImageLeft } from "../parentToddler/OurFeatures";
import { TextHeading } from "../ui/TextHeading";
import aboutUsData from "@/data/aboutUsData";

const Enhancekey = () => {
  const { heading, features } = aboutUsData;

  return (
    <section className="space-y-6">
      <TextHeading
        text_1={heading.title_1}
        text_2={heading.title_2}
        addBreak={false}
        className="text-center  mx-auto" 
      />
      <p className="text-center mt-4 max-w-[800px] mx-auto mb-20">{heading.subTitle}</p>

      {features.map((feature, index) => (
        <FeatureBlock
          key={index}
          imageSide={feature.imageSide}
          titleHighlight={feature.titleHighlight}
          titleMain={feature.titleMain}
          titleSub={feature.titleSub}
          description={feature.description}
          imageSrc={feature.imageSrc}
          GraphicComponent={feature.imageSide === "right" ? ImageRight : ImageLeft}
        />
      ))}
    </section>
  );
};

export default Enhancekey;
