import { BASE_IMAGE_URL } from '@/utils/constants';
import React from 'react'
import { useSelector } from 'react-redux';

export default function ImagesPart() {

    const images = useSelector((state) => state.personDetails?.images?.profiles);

    if (!images || images.length === 0) {
        return <div className='text-center py-10'>No images found.</div>;
    }

    return (
        <div className='mt-6'>
            <h2 className='text-xl font-bold border-l-4 border-secondary pl-3 animate-fade-up animate-duration-200'>Images</h2>
            <ul className='pl-5 flex flex-wrap gap-4 mt-2'>
                {images.map((image, index) => (
                    <li key={index} className={`text-white w-40 animate-fade-up animate-duration-600 rounded-lg overflow-hidden`}>
                        <img src={BASE_IMAGE_URL + image.file_path} alt={`Image ${index + 1}`} className='w-full h-full object-cover' />
                    </li>
                ))}
            </ul>
        </div>
    )
}
