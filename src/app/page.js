import HeroSection from "@/component/HeroSection/Landing";
import AboutUs from "@/component/AboutUs.js/AboutUs";
import Programs from "@/component/program/Programs";
import OurServices from "@/component/ourServices/OurServices";
import OurGallery from "@/component/ourGallery/OurGallery";
import FadeInOnView from "@/component/animation/FadeInOnView";

export default function Home() {
  return ( 
   <>
    <FadeInOnView><HeroSection /></FadeInOnView>
    <FadeInOnView delay={0.2}><AboutUs /></FadeInOnView>
    <FadeInOnView delay={0.4}><Programs /></FadeInOnView>
    <FadeInOnView delay={0.6}><OurServices /></FadeInOnView>
    <FadeInOnView delay={0.8}><OurGallery /></FadeInOnView>
   </>
  );
}
