import { BASE_IMAGE_URL } from '@/utils/constants';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

export default function RecommendationsPart() {

  const recommendations = useSelector((state) => state.trailerMovieDetails?.recommendations);

  return (
    <div>
      <div className='mt-8 flex flex-wrap gap-4'>

            {recommendations.length > 0 && recommendations.map((movie) => {
                const { id, poster_path, title } = movie;
                return (
                    <Link
                        key={id}
                        className='cursor-pointer shrink-0 relative z-10'
                        href={`/browse/movie?id=${id}`}
                    >
                        <img
                            className='w-40 object-cover rounded-md'
                            src={BASE_IMAGE_URL + poster_path}
                            alt={title} />
                    </Link>
                )
            })}
      </div>
    </div>
  )
}

