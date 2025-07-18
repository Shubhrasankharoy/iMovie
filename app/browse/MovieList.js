import { BASE_IMAGE_URL } from '@/utils/constants';
import Link from 'next/link';
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
                    <Link
                        key={id}
                        className='w-32 cursor-pointer shrink-0 relative z-10'
                        href={`/browse/movie?id=${id}`}
                    >
                        <img
                            className='w-full object-cover rounded-md'
                            src={BASE_IMAGE_URL + poster_path}
                            alt={title} />
                    </Link>
                )
            })}
        </div>
    )
})

export default MovieList;
