import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard';

export default function RecommendationsPart() {

  const recommendations = useSelector((state) => state.trailerMovieDetails?.recommendations);

  return (
    <div>
      <div className='mt-8 flex flex-wrap gap-4'>

        {recommendations.length > 0 && recommendations.map((movie) => (
          <div key={movie.id} className={`text-white shrink-0 w-40 h-60 animate-fade-up animate-duration-200 rounded-lg overflow-hidden`}>
            <MovieCard movie={movie} />
          </div>))}
      </div>
    </div>
  )
}

