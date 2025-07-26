import React from 'react'

export default function Tooltips({ imgURL, tooltipContent, className }) {
    return (
        <div className='relative w-fit flex items-center justify-center group'>
            <img className={className + " w-14 cursor-pointer"} src={imgURL} alt={tooltipContent} />
            <div
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-12 z-10 flex flex-col items-center transition-opacity duration-300 opacity-0  group-hover:opacity-100 group-hover:visible invisible"
            >
                <span className='absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-black/70 rounded-lg shadow-xs text-nowrap'>
                    {tooltipContent}
                </span>

                <div className='w-4 h-4 bg-black/70 rotate-45 top-6 z-0 absolute'></div>
            </div>
        </div>
    )
}
