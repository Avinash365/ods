const CurriImages = () => {
    return (
        <div className="w-full 
                        h-[500px] sm:h-[700px] md:h-[1000px] lg:h-[1600px] 
                        grid 
                        grid-cols-[40%_1fr_1fr] 
                        grid-rows-[30%_1fr_1fr_1fr] 
                        gap-2 p-4 sm:p-6 md:p-10">
            
            <div className="bg-amber-400 row-span-2 rounded-xl sm:rounded-2xl md:rounded-3xl" />
            
            <div className="bg-amber-800 col-span-2 rounded-xl sm:rounded-2xl md:rounded-3xl" />
            
            <div className="bg-amber-600 row-span-2 col-span-2 rounded-xl sm:rounded-2xl md:rounded-3xl" />
            
            <div className="bg-amber-600 rounded-xl sm:rounded-2xl md:rounded-3xl" />
            
            <div className="bg-amber-600 rounded-xl sm:rounded-2xl md:rounded-3xl" />
            
            <div className="bg-amber-600 col-span-2 rounded-xl sm:rounded-2xl md:rounded-3xl" />
        </div>
    );
};

export default CurriImages;
