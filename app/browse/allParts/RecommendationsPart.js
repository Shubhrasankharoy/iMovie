import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard';

export default function RecommendationsPart() {

  const recommendations = useSelector((state) => state.trailerMovieDetails?.recommendations);

  return (
    <div>
      <div className='mt-8 flex flex-wrap gap-4'>

        {recommendations.length > 0 && recommendations.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
      </div>
    </div>
  )
}

