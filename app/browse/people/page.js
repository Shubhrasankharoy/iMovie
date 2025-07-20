"use client";

import Header from '@/components/Header';
import useUpdatePersonDetails from '@/hooks/useUpdatePersonDetails';
import { BASE_IMAGE_URL } from '@/utils/constants';
import { formatCustomDate, getGenderInString } from '@/utils/functions';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import { useSelector } from 'react-redux';
import DetailsSection from './DetailsSection';

export default function page() {
    const searchParams = useSearchParams();

    const topLevelDetails = useSelector((state) => state.personDetails?.topLevelDetails);

    const personId = searchParams.get('id');
    useUpdatePersonDetails(personId);

    if (!personId) return <div className='text-white text-center'>No person ID provided.</div>;

    if (!topLevelDetails) return <div className='text-white text-center'>Loading person details...</div>;

    const { profile_path, name, birthday, deathday, gender, place_of_birth, known_for_department } = topLevelDetails;

    const colorClasses = {
        birthday: 'text-blue-400',
        deathday: 'text-red-400',
        gender: gender == 2 ? 'text-yellow-500' : 'text-pink-500',
        place_of_birth: 'text-green-400',
        known_for_department: 'text-purple-400',
    };

    return (
        <>
            <div className='w-screen'>
                <Header />
            </div>
            <section className='w-screen'>
                <div className='container mx-auto flex items-center justify-center py-10'>
                    {profile_path ? (
                        <div className='w-44 h-56 rounded-lg shrink-0 overflow-hidden border-4 border-gray-400'>
                            <img
                                className='w-full object-cover'
                                src={BASE_IMAGE_URL + profile_path}
                                alt={name}
                            />
                        </div>
                    ) : (
                        <div className="relative w-44 h-56 shrink-0 overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-600">
                            <svg className="absolute w-34 h-34 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>
                    )}
                    <div className='text-white h-56 grow ml-6 flex flex-col items-start'>
                        <h2 className='text-2xl font-bold'>{name}</h2>
                        <p>
                            <span className='font-semibold w-28 inline-block'>Born:</span>
                            <span className={colorClasses.birthday + ' animate-fade-right animate-duration-600'}>{formatCustomDate(birthday) || 'Unknown'}</span>
                        </p>
                        {deathday && <p>
                            <span className='font-semibold w-28 inline-block'>Died:</span>
                            <span className={colorClasses.deathday + ' animate-fade-right animate-duration-600'}>{formatCustomDate(deathday)}</span>
                        </p>}
                        {gender && <p>
                            <span className='font-semibold w-28 inline-block'>Gender:</span>
                            <span className={colorClasses.gender + ' animate-fade-right animate-duration-600'}>{getGenderInString(gender)}</span>
                        </p>}
                        <p>
                            <span className='font-semibold w-28 inline-block'>Place of Birth:</span>
                            <span className={colorClasses.place_of_birth + ' animate-fade-right animate-duration-600'}>{place_of_birth || 'Unknown'}</span>
                        </p>
                        <p>
                            <span className='font-semibold w-28 inline-block'>Known For:</span>
                            <span className={colorClasses.known_for_department + ' animate-fade-right animate-duration-600'}>{known_for_department || 'Unknown'}</span>
                        </p>
                    </div>
                </div>
            </section>

            <DetailsSection />
        </>
    )
}
