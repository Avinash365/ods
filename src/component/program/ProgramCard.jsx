import Link from 'next/link';
import programsData from '@/data/programsData';

const ProgramCard = ({ id }) => {
    const courseId = id;
    const program = programsData.find(p => p.courseId === courseId);


    return (

        <Link
            href={`/curriculum/${courseId}`} passHref
            className="max-w-[320px] p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer mx-auto ">
            {/* Icon box */}
            <div className="w-20 h-20 mb-4 rounded-lg bg-blue-100 border-2 border-dashed border-blue-300 flex items-center justify-center">
                <img src={'/abc'} alt="Program Icon" className="w-10 h-10" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800">{program.programName}</h3>

            {/* Age group */}
            <p className="text-sm text-gray-500 mb-2"> {`[ Ages ${program.ageGroup} ]`} </p>

            {/* Description */}
            <p className="text-sm text-gray-600 line-clamp-3 text-justify">
                {program.description}
            </p>
        </Link>

    );
};

export default ProgramCard;
