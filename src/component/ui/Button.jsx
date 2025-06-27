

export default function Button({text, className=""}) {
    return (
        <button className={` px-6 py-2 border border-purple-300 rounded-full text-purple-600 hover:bg-purple-100 transition duration-300 cursor-pointer ${className}`}>
            {text}
        </button>
    )
}