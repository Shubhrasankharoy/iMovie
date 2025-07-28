import { DETAILS_NAV_ITEMS } from '@/utils/constants'
import { setActiveMovieDetailsNavItem } from '@/utils/variableSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import OverviewPart from './allParts/OverviewPart';
import ReviewPart from './allParts/ReviewsPart';
import CastPart from './allParts/CastPart';
import RecommendationsPart from './allParts/RecommendationsPart';
import CrewPart from './allParts/CrewPart';
import DetailsPart from './allParts/DetailsPart';

const componentMap = {
    Overview: <OverviewPart />,
    Details: <DetailsPart />,
    Reviews: <ReviewPart />,
    Cast: <CastPart />,
    Crew: <CrewPart />,
    Recommendations: <RecommendationsPart />,
};


export default function DetailsSection() {
    const dispatch = useDispatch();
    const activeDetailsNavItem = useSelector((state) => state.variables?.activeMovieDetailsNavItem);
    const movieDetails = useSelector((state) => state.trailerMovieDetails?.movieDetails);

    if (!movieDetails) {
        return null;
    }


    return (
        <section className='py-8 w-full'>


            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    {DETAILS_NAV_ITEMS.map((item, index) => (

                        <li
                            key={index}
                            className="me-2"
                            onClick={()=> dispatch(setActiveMovieDetailsNavItem(item))}
                        >

                            <span className={`inline-block p-4 cursor-pointer font-bolder text-xl border-b-2 border-transparent rounded-t-lg ${activeDetailsNavItem == item ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'} `}>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>


            {componentMap[activeDetailsNavItem] || (
                <div className='text-white text-center mt-4'>No Content Available</div>
            )}

        </section>
    )
}
