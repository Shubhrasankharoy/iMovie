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
                        <img
                            className='w-full object-cover'
                            src={BASE_IMAGE_URL + member.profile_path}
                            alt={member.name}
                        />
                    </div>
                    <h3 className='text-xl font-bold line-clamp-1'>{member.name}</h3>
                    <p className='text-gray-400 line-clamp-1'>{member.character}</p>
                </div>
            ))}
        </div>
    )
}
