import { BASE_IMAGE_URL } from '@/utils/constants';
import React from 'react'
import { useSelector } from 'react-redux';

export default function CastPart() {
    const cast = useSelector((state) => state.trailerMovieDetails?.credits?.cast);

    if (!cast || cast.length === 0) return null;

    return (
        <div className='flex flex-wrap gap-4 py-8'>
            {cast.map((member) => (
                <div className='w-40 flex flex-col items-center' key={member.id}>
                    <div className='flex items-center aspect-square w-32 overflow-hidden rounded-full'>
                        {member.profile_path ? (
                            <img
                                className='w-full object-cover'
                                src={BASE_IMAGE_URL + member.profile_path}
                                alt={member.name}
                            />
                        ) : (
                            <div className="relative w-32 h-32 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg className="absolute w-34 h-34 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                            </div>
                        )}
                    </div>
                    <h3 className='text-xl font-bold line-clamp-1'>{member.name}</h3>
                    <p className='text-gray-400 line-clamp-1'>{member.character}</p>
                </div>
            ))}
        </div>
    )
}
