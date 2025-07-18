import HeroSection from "@/component/HeroSection/Landing"
import WorkWithUs from "@/component/careers/WorkWithUs"
import Eligibility from "@/component/careers/Eligibility"

export default function Careers() {
    return (
        <div 
            className="lg:px-15">
            <HeroSection text_1="Join Our fast" text_2 = "growing Team"/>
            <WorkWithUs />
            <Eligibility/>
        </div>

    )
}
