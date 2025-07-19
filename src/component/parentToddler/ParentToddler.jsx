import HeroSection from "../HeroSection/Landing";
import OurFeatures from "./OurFeatures";
import Benefits from "./Benefits";

const ParentToddler = () => {
    return (
        <div className="space-y-20">
            <HeroSection text_1="Parent-Toddler" text_2="Program"/>
            <OurFeatures/>
            <Benefits/>
        </div>
    )
} 
export default ParentToddler; 