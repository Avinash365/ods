const SportsImageGrid = () => {
    return (
        <div className="bg-white">
            {/* Grid layout for medium and above */}
            <div className="hidden md:grid p-10 w-full h-screen grid-cols-4 grid-rows-4 gap-3">
                <div className="row-span-4 col-span-2 bg-amber-700 rounded-2xl"></div>
                <div className="row-span-2 col-span-2 bg-amber-400 rounded-2xl"></div>
                <div className="row-span-2 col-span-1 bg-amber-950 rounded-2xl"></div>
                <div className="row-span-2 col-span-1 bg-amber-950 rounded-2xl"></div>
            </div>

            {/* Flex layout for mobile only */}
            <div className="flex flex-wrap justify-center gap-1 md:hidden">
                <div className="w-[150px] h-[200px] bg-amber-800 rounded-2xl"></div>
                <div className="w-[150px] h-[200px] bg-amber-800 rounded-2xl"></div>
                <div className="w-[150px] h-[200px] bg-amber-800 rounded-2xl"></div>
                <div className="w-[150px] h-[200px] bg-amber-800 rounded-2xl"></div>
            </div>
        </div>
    );
};

export default SportsImageGrid;
