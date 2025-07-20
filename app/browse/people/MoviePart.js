"use client";

import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard';

export default function MoviePart() {
    const [castSeeMore, setCastSeeMore] = useState(false);
    const [crewSeeMore, setCrewSeeMore] = useState(false);
    const movieCredits = useSelector((state) => state.personDetails?.movieCredits);

    if (!movieCredits) return <div className='text-white text-center'>Loading movie credits...</div>;

    return (
        <div className='mt-6 space-y-4'>
            <div>
                <h2 className='text-xl font-bold border-l-4 border-secondary pl-3 animate-fade-up animate-duration-200'>Cast</h2>
                <ul className='pl-5 flex flex-wrap gap-4 mt-2'>
                    {(castSeeMore ? movieCredits.cast : movieCredits.cast.slice(0, 10)).map((movie, index) => (
                        <li key={index} className={`text-white w-40 animate-fade-up animate-duration-600 rounded-lg overflow-hidden`}>
                            <MovieCard movie={movie} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-full flex items-center mt-4'>
                <div className='flex-1 bg-gray-600 h-px'></div>
                {movieCredits.cast.length > 10 && (
                    <button
                        className='border border-secondary font-bold bg-secondary/20 text-secondary px-4 flex items-center shrink-0 py-2 ml-2 rounded-full cursor-pointer hover:bg-secondary/40 transition-colors duration-200 shadow'
                        type="button"
                        onClick={() => setCastSeeMore(!castSeeMore)}
                    >
                        <span className='mr-2'>{castSeeMore ? 'See less' : 'See more'}</span>
                        <svg className={`${castSeeMore ? 'rotate-180' : ''} transition-transform duration-200`} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                    </button>
                )}
            </div>


            <div>
                <h2 className='text-xl font-bold border-l-4 border-secondary pl-3 animate-fade-up animate-duration-200'>Crew</h2>
                <ul className='pl-5 flex flex-wrap gap-4 mt-2'>
                    {(crewSeeMore ? movieCredits.crew : movieCredits.crew.slice(0, 10)).map((movie, index) => (
                        <li key={index} className={`text-white w-40 animate-fade-up animate-duration-600 rounded-lg overflow-hidden`}>
                            <MovieCard movie={movie} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-full flex items-center mt-4'>
                <div className='flex-1 bg-gray-600 h-px'></div>
                {movieCredits.crew.length > 10 && (
                    <button
                        className='border border-secondary font-bold bg-secondary/20 text-secondary px-4 flex items-center shrink-0 py-2 ml-2 rounded-full cursor-pointer hover:bg-secondary/40 transition-colors duration-200 shadow'
                        type="button"
                        onClick={() => setCrewSeeMore(!crewSeeMore)}
                    >
                        <span className='mr-2'>{crewSeeMore ? 'See less' : 'See more'}</span>
                        <svg className={`${crewSeeMore ? 'rotate-180' : ''} transition-transform duration-200`} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                    </button>
                )}
            </div>
        </div>
    )
}
