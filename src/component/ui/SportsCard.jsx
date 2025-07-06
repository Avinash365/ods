const SportsCard = ({ title, subTitle }) => {
    return (
        <div
            className="group max-w-[320px] min-w-[320px] h-[240px] p-6 mx-auto mt-10
                       border-l-1 border-r-1 border-sports-card-bg
                       bg-white hover:bg-sports-card-bg
                       flex flex-col items-center  
                       shadow-md 
                       hover:shadow-xl 
                       transition-shadow cursor-pointer"
        >
            {/* Icon box */}
            <div
                className="w-20 h-20 mb-4 rounded-lg bg-blue-100 
                           border-2 border-dashed border-sports-card-bg
                           flex items-center justify-center"
            >
                <img src="/abc" alt="Program Icon" className="w-10 h-10" />
            </div>

            {/* Title */}
            <h3
            className="text-xl font-semibold text-sports-card-bg
                           group-hover:text-white transition-colors"
            >
                {title}
            </h3>

            {/* Subtitle */}
            <p
                className="text-sm text-gray-600 group-hover:text-white 
                           line-clamp-3 text-center transition-colors"
            >
                {subTitle}
            </p>
        </div>
    );
};

export default SportsCard;
