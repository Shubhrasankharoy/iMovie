import { formatCustomDate } from '@/utils/functions';
import React from 'react'
import { useSelector } from 'react-redux'


export default function DetailsPart() {

    const details = useSelector((state) => state.personDetails?.topLevelDetails);

    if (!details) return <div className='text-white text-center'>Loading details...</div>;

    const { biography, birthday, place_of_birth } = details;

    return (
        <div className='mt-6 space-y-4'>
            <div>
                <h2 className='text-xl font-bold border-l-4 border-secondary pl-3 animate-fade-up animate-duration-200'>Biography</h2>
                <p className='mt-2 text-gray-400 text-justify pl-3 animate-fade-up animate-duration-200'>{biography || 'No biography available.'}</p>
            </div>
            <div>
                <h2 className='text-xl font-bold border-l-4 border-secondary pl-3 animate-fade-up animate-duration-350'>Date of Birth</h2>
                <p className='mt-2 text-gray-400 text-justify pl-3 animate-fade-up animate-duration-350'>{formatCustomDate(birthday) || 'No date of birth available.'}</p>
            </div>
            <div>
                <h2 className='text-xl font-bold border-l-4 border-secondary pl-3 animate-fade-up animate-duration-500'>Place of Birth</h2>
                <p className='mt-2 text-gray-400 text-justify pl-3 animate-fade-up animate-duration-500'>{place_of_birth || 'No place of birth available.'}</p>
            </div>
        </div>
    )
}
