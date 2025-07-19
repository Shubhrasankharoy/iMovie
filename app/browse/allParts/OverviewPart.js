import { BASE_IMAGE_URL } from '@/utils/constants';
import React from 'react'
import { useSelector } from 'react-redux';

export default function OverviewPart() {
    const movieDetails = useSelector((state) => state.trailerMovieDetails?.movieDetails);
    const backdrops = useSelector((state) => state.trailerMovieDetails?.images?.backdrops);

    if (!movieDetails) {
        return null;
    }

    const { overview } = movieDetails;
    return (
        <>
            <div className='mt-4 w-full'>
                <p className='text-xl text-gray-400'>{overview}</p>
            </div>
            <div className='w-full mt-8 flex flex-wrap gap-4'>
                {backdrops && backdrops.length > 0 ? (
                    backdrops.map((backdrop, index) => (
                        <div key={index} className='flex w-80 justify-center items-center'>
                            <img
                                src={BASE_IMAGE_URL + backdrop.file_path} alt={`Backdrop ${index}`}
                                className='w-full object-cover rounded-lg'
                            />
                        </div>
                    ))
                ) : (
                    <p className='text-gray-400'>No backdrops available.</p>
                )}
            </div>
        </>
    )
}
