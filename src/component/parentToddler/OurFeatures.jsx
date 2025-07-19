import { TextHeading } from "../ui/TextHeading";

// ===================
// Main Section Component
// ===================
const OurFeatures = () => {
  const sensoryDescription =
    "Activities are crafted to engage toddlers’ senses and cognitive abilities, encouraging exploration, curiosity, and learning through movement.";

  const socialDescription =
    "Toddlers get opportunities to interact with peers in a safe, supervised setting, laying the groundwork for social skills like sharing, turn-taking, and empathy.";

  const environmentDescription =
    "Our experienced instructors ensure that every activity is conducted with the highest standards of safety and care, creating a warm and welcoming space for families.";

  const bondingDescription =
    "By involving parents directly in each session, the program strengthens emotional connections, enhances communication, and builds trust between parent and child.";

  return (
    <section className="px-8 md:px-20">
      <TextHeading
        text_1="Our"
        text_2="Features"
        addBreak={false}
        className="text-center"
      />
      <p className="text-center mt-4">
        This very extraordinary feature can make learning activities more efficient
      </p>

      <FeatureBlock
        imageSide="right"
        titleHighlight="Sensory"
        titleMain="and Cognitive Stimulation:"
        description={sensoryDescription}
        GraphicComponent={ImageRight}
      />

      <FeatureBlock
        imageSide="left"
        titleHighlight="Social"
        titleMain="Interaction"
        description={socialDescription}
        GraphicComponent={ImageLeft}
      />

      <FeatureBlock
        imageSide="right"
        titleHighlight="Safe and Nurturing"
        titleMain="Environment"
        description={environmentDescription}
        GraphicComponent={ImageRight}
      />

      <FeatureBlock
        imageSide="left"
        titleMain="Parent-Child"
        titleSub="Bonding"
        description={bondingDescription}
        GraphicComponent={ImageLeft}
      />
    </section>
  );
};

export default OurFeatures;

// ===================
// Text + Graphic Layout Component
// ===================
const FeatureBlock = ({
  imageSide = "right",
  titleHighlight = "",
  titleMain = "",
  titleSub = "",
  description = "",
  GraphicComponent,
}) => {
  const isImageLeft = imageSide === "left";

  return (
    <div className="flex flex-wrap justify-between items-center lg:px-20 mt-10 gap-6">
      {isImageLeft && GraphicComponent && <GraphicComponent />}
      <FeatureText
        highlight={titleHighlight}
        main={titleMain}
        sub={titleSub}
        description={description}
      />
      {!isImageLeft && GraphicComponent && <GraphicComponent />}
    </div>
  );
};

// ===================
// Text Content Component
// ===================
const FeatureText = ({
  highlight = "",
  main = "",
  sub = "",
  description = "",
}) => {
  return (
    <div className="max-w-[350px] space-y-3">
      <h1 className="text-2xl md:text-3xl lg:text-4xl">
        {highlight && (
          <span className="text-green-heading-text">{highlight}</span>
        )}{" "}
        <span className="text-heading-text">{main}</span>
        {sub && (
          <>
            <br />
            <span className="text-green-heading-text">{sub}</span>
          </>
        )}
      </h1>
      <p>{description}</p>
    </div>
  );
};

// ===================
// Placeholder Graphic Components
// ===================
const ImageRight = () => (
  <div className="min-w-[250px] aspect-square bg-amber-400" />
);

const ImageLeft = () => (
  <div className="min-w-[250px] aspect-square bg-amber-400" />
);
