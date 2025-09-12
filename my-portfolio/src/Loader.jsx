

export function Loader()
{
    return(
        <div className="fixed flex justify-center items-center inset-0 bg-[#0f1113] bg-opacity-90 z-50 selection:text-white">
            <div className="flex flex-col items-center gap-4">
                {/* Animation */}
                <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-b-transparent border-red-600 animate-spin"></div>
                {/* loading text */}
                <div className="text-lg text-red-600 font-medium tracking-wider animate-pulse">
                    Loading...
                </div>
            </div>
        </div>
    )
}