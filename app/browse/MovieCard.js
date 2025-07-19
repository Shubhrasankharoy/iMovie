import { BASE_IMAGE_URL, DEFAULT_POSTER_URL } from '@/utils/constants';
import Link from 'next/link';
import React from 'react'

export default function MovieCard({ movie }) {
    const { id, poster_path, title } = movie;
    return (
        <Link
            key={id}
            className='cursor-pointer w-40 overflow-hidden shrink-0 relative z-10 rounded-md'
            href={`/browse/movie?id=${id}`}
            title={title}
        >
            <img
                className='w-full object-cover hover:scale-110 transition-transform '
                src={poster_path ? BASE_IMAGE_URL + poster_path : DEFAULT_POSTER_URL}
                alt={title} />
        </Link>
    )
}
