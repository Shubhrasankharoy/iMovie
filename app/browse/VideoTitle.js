import useFetchImages from '@/hooks/useFetchImages';
import { BASE_IMAGE_URL } from '@/utils/constants';
import { extractYearFromDate, flagToLanguage } from '@/utils/functions';
import React from 'react'
import { useSelector } from 'react-redux';

export default function VideoTitle() {

  const movieDetails = useSelector((state) => state.trailerMovieDetails?.movieDetails);
  const logoImages = useSelector((state) => state.trailerMovieDetails?.images?.logos);
  const movieGenreList = useSelector((state) => state.variables?.movieGenres);

  useFetchImages(movieDetails?.id);
  if (!movieDetails) return null;


  const { title, overview, release_date } = movieDetails

  return (
    <div className='absolute w-full aspect-video -top-32 bg-linear-to-r from-black/80 left-0'>
      <div className='ps-20 flex  space-y-3 flex-col justify-end pb-72 h-full w-1/2'>
        {logoImages && logoImages.length > 0 ? (
          <img
            src={BASE_IMAGE_URL + logoImages[0].file_path}
            alt={title}
            className='w-60 object-contain'
          />
        ) : (
          <h1 className='text-5xl font-bold text-nowrap'>{title}</h1>
        )}
        <div className='flex items-center space-x-2 font-bold'>
          <span>{extractYearFromDate(release_date)}</span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor"></path></svg>
          <span>{flagToLanguage(movieDetails?.original_language)}</span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor"></path></svg>
          <span>
            <span className='text-yellow-400 mr-1'>★</span>
            <span>{movieDetails?.vote_average}</span>
          </span>
        </div>
        <p className='text-white/80 text-lg'>{overview}</p>
        <div className='space-x-2 flex flex-wrap'>
            {movieDetails?.genre_ids?.map((genre_id, index) => {
              const genre = movieGenreList?.find((g) => g.id === genre_id);
              return (
                <span className='border border-gray-700 text-white py-1 px-4 rounded-2xl' key={genre_id}>
                  {genre ? genre.name : `Genre ${index + 1}`}
                </span>
              );
            })}
        </div>
        <button 
        className='w-52 bg-linear-to-r from-primary to-blue-600 hover:bg-linear-to-br text-white font-bold text-xl p-5 rounded-sm cursor-pointer flex items-center justify-center space-x-2'
        onClick={() => {console.log('Watch Trailer Clicked')}}
        >
          <span>See More</span>
          <svg className='w-7 h-7' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  )
}
