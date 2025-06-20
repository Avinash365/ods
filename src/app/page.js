import Image from "next/image";
import { Navbar } from "@/component/navbar/Navbar";
import { Landing } from "@/component/LandingSection.jsx/Landing";


export default function Home() {
  return ( 
   <>
    <Navbar/>
    <Landing/>
   </>
  )
}
