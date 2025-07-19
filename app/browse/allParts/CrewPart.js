import { BASE_IMAGE_URL } from '@/utils/constants'
import React from 'react'
import { useSelector } from 'react-redux';

export default function CrewPart() {

    const crewList = useSelector((state) => state.trailerMovieDetails?.credits?.crew);

    if (!crewList || crewList.length === 0) return <div className='text-white text-center'>No crew information available.</div>;

    return (
        <div className="flex flex-wrap mt-8 gap-4">
            {crewList.map(member => (
                <div key={member.credit_id} className="bg-white dark:bg-gray-900 shadow rounded-lg p-4 w-56">
                    {member.profile_path ? (
                        <img
                            src={BASE_IMAGE_URL + member.profile_path}
                            alt={member.name}
                            className="w-full h-64 object-cover rounded-md mb-2"
                        />
                    ) : (
                        <div className="relative w-full h-64 mb-2 overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-600">
                            <svg className="absolute w-full h-full text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>
                    )}
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{member.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{member.job}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Department: {member.department}</p>
                    <p className="text-xs text-yellow-500">🔥 Popularity: {member.popularity.toFixed(1)}</p>
                </div>
            ))}
        </div>

    )
}
