import { POSTER_URL } from '@/utils/constants';
import React, { forwardRef } from 'react'

const MovieList = forwardRef(({ movies }, ref) => {


    return (
        <div
            ref={ref}
            className='w-full flex overflow-x-auto mb-0 space-x-4 scroll-smooth no-scrollbar'
        >
            {movies.length > 0 && movies.map((movie) => {
                const { id, poster_path, title } = movie;
                return (
                    <div
                        key={id}
                        className='w-32 cursor-pointer shrink-0 relative z-10'
                    >
                        <img
                            className='w-full object-cover rounded-md'
                            src={POSTER_URL + poster_path}
                            alt={title} />
                    </div>
                )
            })}
        </div>
    )
})

export default MovieList;
