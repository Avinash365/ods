import { FeatureBlock, ImageRight, ImageLeft } from "../parentToddler/OurFeatures";
import { TextHeading } from "../ui/TextHeading";
import aboutUsData from "@/data/aboutUsData";
import FadeInOnView from "../animation/FadeInOnView";

const Enhancekey = () => {
  const { heading, features } = aboutUsData;

  return (
    <section className="space-y-6">
      <FadeInOnView>
        <TextHeading
          text_1={heading.title_1}
          text_2={heading.title_2}
          addBreak={false}
          className="text-center mx-auto"
        />
        <p className="text-center mt-4 max-w-[800px] mx-auto mb-20">
          {heading.subTitle}
        </p>
      </FadeInOnView>

      {features.map((feature, index) => (
        <FadeInOnView key={index} delay={index * 0.2}>
          <FeatureBlock
            imageSide={feature.imageSide}
            titleHighlight={feature.titleHighlight}
            titleMain={feature.titleMain}
            titleSub={feature.titleSub}
            description={feature.description}
            imageSrc={feature.imageSrc}
            GraphicComponent={
              feature.imageSide === "right" ? ImageRight : ImageLeft
            }
          />
        </FadeInOnView>
      ))}
    </section>
  );
};

export default Enhancekey;
