
export function TextHeading({ text_1, text_2, addBreak = true, className = "" }) {
  return (
    <h1
      className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a237e] leading-tight ${className}`}
    >
      {text_1}
      {addBreak ? <br /> : " "}
      <span className="text-teal-500">{text_2}</span>
    </h1>
  );
}