const SportsCard = ({ 
  title = "", 
  subTitle = "", 
  logo = "" 
}) => {
  return (
    <div
      className="group max-w-[320px] min-w-[320px] h-[240px] p-6 mx-auto mt-10
                 bg-white hover:bg-sports-card-bg
                 flex flex-col items-center  
                 shadow-md hover:shadow-xl 
                 transition-shadow cursor-pointer"
    >
      {/* Icon Box */}
      <div>
        <img
          src={logo}
          alt={title ? `${title} Icon` : "Program Icon"}
          className="w-20 h-20 object-contain mb-4"
        />
      </div>        

      {/* Title */}
      <h3
        className="text-xl font-semibold text-sports-card-bg
                   group-hover:text-white transition-colors text-center"
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
