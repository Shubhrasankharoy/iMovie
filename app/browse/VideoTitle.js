import React from 'react'

export default function VideoTitle({ movieDetails }) {

  if (!movieDetails) return null;
  

  const { title, overview, release_date } = movieDetails

  return (
    <div className='absolute w-full aspect-video -top-32 bg-linear-to-r from-black/80 left-0'>
      <div className='ps-20 flex  space-y-3 flex-col justify-end pb-72 h-full w-1/2'>
        <h1 className='text-5xl font-bold text-nowrap'>{title}</h1>
        <p className='text-white/80 text-lg'>{overview}</p>
        <p>
          <span className='text-xl' >Release Date: </span>
          <span>{release_date}</span>
        </p>
        <button className='w-52 bg-linear-to-r from-primary to-blue-600 hover:bg-linear-to-br text-white font-bold text-xl p-5 rounded-sm cursor-pointer'>
          Watch Now ▶️
        </button>
      </div>

    </div>
  )
}
