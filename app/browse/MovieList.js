import React, { forwardRef } from 'react'
import MovieCard from './MovieCard';

const MovieList = forwardRef(({ movies }, ref) => {


    return (
        <div
            ref={ref}
            className='w-full flex overflow-x-auto mb-0 space-x-4 scroll-smooth no-scrollbar'
        >
            {movies.length > 0 && movies.map((movie, index) => (
                <div key={index} className={`text-white shrink-0 w-40 h-60 animate-fade-up animate-duration-200 rounded-lg overflow-hidden`}>
                    <MovieCard movie={movie} />
                </div>))}
        </div>
    )
})

export default MovieList;
