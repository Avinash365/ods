

export const JoinUsBtn = ({className = ""}) => {
    return (
        <div className={`inline-block bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 p-[2px] rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${className}`}>
            <div className="rounded-full bg-white px-6 py-2">
                <span className="text-lg font-semibold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-colors duration-300">
                    Join Us
                </span>
            </div>
        </div>
    )
}