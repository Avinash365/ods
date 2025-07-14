

import HeroSection from "@/component/HeroSection/Landing";
import AboutUs from "@/component/AboutUs.js/AboutUs";
import Programs from "@/component/program/Programs";
import Footer from "@/component/Footer/Footer";
import OurServices from "@/component/ourServices/OurServices";


export default function Home() {
  return ( 
   <>
    <HeroSection/>
    <AboutUs/>
     <Footer />
    <Programs/>
    <OurServices/>
   </>
  )
}
