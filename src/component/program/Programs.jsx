import ProgramCard from "./ProgramCard"
import { TextHeading } from "../ui/TextHeading"
import Button from "../ui/Button"

export default function Programs() {
    return (
        <div className="w-[98%] mx-auto -mt-40 p-2 pb-0 border-1 border-white rounded-xl">
            <div
                className="px-8 bg-white rounded-xl p-10">
                <TextHeading text_1="CURRICULUM" text_2="OFFERED" addBreak={false} />
                <div className="flex flex-wrap mt-20">
                    <ProgramCard id="tp001"
                        
                    />
                    <ProgramCard id="pp002"
                       

                    />
                    <ProgramCard id="kr003"
                        
                    />
                    <ProgramCard id="wfc004"
                       
                    />
                </div>
            </div>
        </div>
    )
}