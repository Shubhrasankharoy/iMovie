import { BASE_IMAGE_URL } from '@/utils/constants';
import Link from 'next/link';
import React, { forwardRef } from 'react'
import MovieCard from './MovieCard';

const MovieList = forwardRef(({ movies }, ref) => {


    return (
        <div
            ref={ref}
            className='w-full flex overflow-x-auto mb-0 space-x-4 scroll-smooth no-scrollbar'
        >
            {movies.length > 0 && movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
        </div>
    )
})

export default MovieList;
