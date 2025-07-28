"use client";

import { useSearchParams } from 'next/navigation';
import React from 'react'
import TrailerSection from '../TrailerSection';
import useUpdateTrailerDetails from '@/hooks/useUpdateTrailerDetails';
import { useSelector } from 'react-redux';
import { BASE_IMAGE_URL } from '@/utils/constants';
import { extractYearFromDate, formatCurrency } from '@/utils/functions';
import DetailsSection from '../DetailsSection';
import Link from 'next/link';

export default function page() {
  const searchParams = useSearchParams();
  const movieId = searchParams.get('id');
  const movieDetails = useSelector((state) => state.trailerMovieDetails?.movieDetails);
  const credits = useSelector((state) => state.trailerMovieDetails?.credits);

  useUpdateTrailerDetails(movieId);

  if (!movieDetails) {
    return (
      <div className='w-screen h-screen flex items-center justify-center'>
        <h1 className='text-2xl text-white'>Loading...</h1>
      </div>
    );
  }

  const { title, poster_path, spoken_languages, genres, release_date, belongs_to_collection, budget, revenue, vote_average, vote_count } = movieDetails;

  return (
    <>
      <TrailerSection />
      <div className="w-screen px-20 relative -my-80 z-10 bg-black">
        <section className='py-8 w-full flex gap-8'>

          <img
            className='w-60 object-cover rounded-lg'
            src={BASE_IMAGE_URL + poster_path}
            alt={title}
          />

          <div className='h-full grow'>
            <h1 className='text-3xl text-white font-bold'>
              {title}
              <span className='text-gray-400 text-2xl'>{'(' + extractYearFromDate(release_date) + ')'}</span>
            </h1>

            <div className='flex gap-2'>
              <h1 className='w-20 shrink-0 font-bold'>Genres:</h1>
              <p className='text-gray-400 animate-fade-left animate-duration-200'>{genres.map((genre) => genre.name).join(", ")}</p>
            </div>

            <div className='flex gap-2'>
              <h1 className='w-20 shrink-0 font-bold'>Audio:</h1>
              <p className='text-gray-400 flex items-center gap-1 animate-fade-left animate-duration-400'>
                {spoken_languages.map((audio) => audio.english_name).join(", ")}
                <svg className='text-white' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.46968 1.05085C7.64122 1.13475 7.75 1.30904 7.75 1.5V13.5C7.75 13.691 7.64122 13.8653 7.46968 13.9492C7.29813 14.0331 7.09377 14.0119 6.94303 13.8947L3.2213 11H1.5C0.671571 11 0 10.3284 0 9.5V5.5C0 4.67158 0.671573 4 1.5 4H3.2213L6.94303 1.10533C7.09377 0.988085 7.29813 0.966945 7.46968 1.05085ZM6.75 2.52232L3.69983 4.89468C3.61206 4.96294 3.50405 5 3.39286 5H1.5C1.22386 5 1 5.22386 1 5.5V9.5C1 9.77615 1.22386 10 1.5 10H3.39286C3.50405 10 3.61206 10.0371 3.69983 10.1053L6.75 12.4777V2.52232ZM10.2784 3.84804C10.4623 3.72567 10.7106 3.77557 10.833 3.95949C12.2558 6.09798 12.2558 8.90199 10.833 11.0405C10.7106 11.2244 10.4623 11.2743 10.2784 11.1519C10.0944 11.0296 10.0445 10.7813 10.1669 10.5973C11.4111 8.72728 11.4111 6.27269 10.1669 4.40264C10.0445 4.21871 10.0944 3.97041 10.2784 3.84804ZM12.6785 1.43044C12.5356 1.2619 12.2832 1.24104 12.1147 1.38386C11.9462 1.52667 11.9253 1.77908 12.0681 1.94762C14.7773 5.14488 14.7773 9.85513 12.0681 13.0524C11.9253 13.2209 11.9462 13.4733 12.1147 13.6161C12.2832 13.759 12.5356 13.7381 12.6785 13.5696C15.6406 10.0739 15.6406 4.92612 12.6785 1.43044Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                  </path>
                </svg>
              </p>
            </div>

            <div className='flex gap-2'>
              <h1 className='w-20 shrink-0 font-bold'>Cast:</h1>
              <p className='text-gray-400 flex flex-wrap gap-1 animate-fade-left animate-duration-600'>
                {credits?.cast.slice(0,50).map((cast, idx, arr) => (
                  <React.Fragment key={cast.id}>
                    <Link
                      className='hover:text-white cursor-pointer'
                      href={`/browse/people?id=${cast.id}`}
                    >
                      {cast.name}
                    </Link>
                    {idx < arr.length - 1 && ', '}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className='flex gap-2'>
              <h1 className='w-20 shrink-0 font-bold'>Director:</h1>
              <p className='text-gray-400 flex items-center gap-1 animate-fade-left animate-duration-800'>
                {credits?.crew.filter((crew) => crew.job === "Director").map((director, idx, arr) => <React.Fragment key={director.id}>
                    <Link
                      className='hover:text-white cursor-pointer'
                      href={`/browse/people?id=${director.id}`}
                    >
                      {director.name}
                    </Link>
                    {idx < arr.length - 1 && ', '}
                  </React.Fragment>)}
              </p>
            </div>

            {belongs_to_collection !== null && (
              <div className='flex gap-2'>
                <h1 className='w-20 shrink-0 font-bold'>Collection:</h1>
                <p className='text-gray-400 flex items-center gap-1 animate-fade-left animate-duration-1000'>
                  {belongs_to_collection?.name || "N/A"}
                </p>
              </div>
            )}

            {budget !== 0 && (
              <div className='flex gap-2'>
                <h1 className='w-20 shrink-0 font-bold'>Budget:</h1>
                <p className='text-gray-400 flex items-center gap-1 animate-fade-left animate-duration-[1200ms]'>
                  {formatCurrency(budget) || "N/A"}
                </p>
              </div>
            )}

            {revenue !== 0 && (
              <div className='flex gap-2'>
                <h1 className='w-20 shrink-0 font-bold'>Revenue:</h1>
                <p className='text-gray-400 flex items-center gap-1 animate-fade-left animate-duration-[1400ms]'>
                  {formatCurrency(revenue) || "N/A"}
                </p>
              </div>
            )}

            <div className='flex gap-2 items-center'>
              <div className='text-yellow-400 relative w-16 h-16 flex items-center justify-center'>
                <svg className='w-16 absolute z-0 rotate-12' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg>
                <span className=' text-black absolute z-10 font-bold'>{vote_average.toFixed(1)}</span>
              </div>
              <h1 className='font-bold'>Rating:</h1>
              <p className='text-gray-400 flex items-center gap-1 animate-fade-left animate-duration-[1600ms]'>
                {vote_average}/10 from {vote_count} user
              </p>
            </div>

          </div>
        </section>

        <DetailsSection />
      </div>
    </>
  )
}
