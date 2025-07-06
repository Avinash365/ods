
import { TextHeading } from "@/component/ui/TextHeading";
import Button from "@/component/ui/Button";
import programsData from "@/data/programsData";
import { notFound } from 'next/navigation';
import CurriculumDetails from "@/component/curriculum/CurriculumDetails";

export default async function Curriculam({ params }) {

    const {id} = await params; 

    const program = programsData.find(p => p.courseId === id);

    if (!program) return notFound();

    return (
        <div>
            {/* Hero Video */}
            <div className="rounded-lg overflow-hidden aspect-video w-full  mx-auto mt-20 p-4">
                <iframe
                    className="w-full h-full rounded-2xl"
                    src={program.videos[0]} // First video link from array
                    title={`${program.programName} Introduction Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

            {/* Text Content */}
            <div className="px-8 lg:px-10">
                <div className="flex justify-between items-center h-32">
                    <TextHeading
                        text_1={program.programName}
                        text_2={`[ Ages ${program.ageGroup} ]`}
                        addBreak={false}
                    />
                    <Button text="Enroll now" className="hidden md:block" />
                </div>

                <div className="text-xl lg:text-2xl font-normal leading-relaxed text-body-text text-justify mt-4">
                    {program.description}
                </div>

                <div className="flex justify-center">
                    <Button text="Enroll now" className="md:hidden mt-7" />
                </div>
            </div>  
            <div className="px-10">
                <CurriculumDetails/>
            </div>
            
        </div>
    );
}
