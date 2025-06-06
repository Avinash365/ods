
const SchoolName = ({ className = "" }) => {
  return (
    <div
      className={`w-fit p-2 text-nav-text flex flex-col items-center justify-center min-w-[200px] cursor-pointer ${className}`}
    >
      <p className="font-bold text-[18px] mb-2">OPEN DOOR SPORTS</p>
      <div className="flex items-center w-fit">
        <Line />
        <p className="mx-2 text-[12px]">Kolkata India</p>
        <Line />
      </div>
    </div>
  );
};



const Line = () => {
    return (
        <div 
        className="flex flex-col items-center justify-center">
            <hr 
            className="border-nav-text border-t-1 w-[35px] mb-0.5" />
            <hr 
            className="border-nav-text border-t-1 w-[35px] mt-0.5" />
        </div>
    );
}; 

export {SchoolName}; 