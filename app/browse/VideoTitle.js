import useFetchImages from '@/hooks/useFetchImages';
import { BASE_IMAGE_URL } from '@/utils/constants';
import { extractYearFromDate, flagToLanguage, getCorrectLogo, timeFormatter } from '@/utils/functions';
import React from 'react'
import { useSelector } from 'react-redux';

export default function VideoTitle() {

  const movieDetails = useSelector((state) => state.trailerMovieDetails?.movieDetails);
  const logoImages = useSelector((state) => state.trailerMovieDetails?.images?.logos);

  useFetchImages(movieDetails?.id);
  if (!movieDetails) return null;


  const { title, overview, release_date, original_language, vote_average, genres, runtime } = movieDetails

  return (
    <div className='absolute w-full aspect-video -top-32 bg-linear-to-r from-black/80 left-0'>
      <div className='ps-20 flex  space-y-3 flex-col justify-end pb-72 h-full w-1/2'>
        {logoImages && logoImages.length > 0 ? (
          <img
            src={BASE_IMAGE_URL + getCorrectLogo(logoImages, original_language)?.file_path}
            alt={title}
            className='w-60 object-contain'
          />
        ) : (
          <h1 className='text-5xl font-bold text-nowrap'>{title}</h1>
        )}
        <div className='flex items-center space-x-2 font-bold'>
          <span>{extractYearFromDate(release_date)}</span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor"></path></svg>
          <span>{flagToLanguage(original_language)}</span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor"></path></svg>
          <span>{timeFormatter(runtime)}</span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor"></path></svg>
          <span>
            <span className='text-yellow-400 mr-1'>★</span>
            <span>{vote_average}</span>
          </span>
        </div>
        <p className='text-white/80 text-lg'>{overview}</p>
        <div className='space-x-2 flex flex-wrap'>
            {genres?.map((genre, index) => {
              return (
                <span className='border border-gray-700 text-white py-1 px-4 rounded-2xl' key={genre.id}>
                  {genre.name}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  )
}
