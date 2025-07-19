import { DETAILS_NAV_ITEMS } from '@/utils/constants'
import { setActiveDetailsNavItem } from '@/utils/variableSlice';
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
    const activeDetailsNavItem = useSelector((state) => state.variables?.activeDetailsNavItem);
    const movieDetails = useSelector((state) => state.trailerMovieDetails?.movieDetails);

    if (!movieDetails) {
        return null;
    }


    return (
        <section className='py-8 w-full'>
            <nav className='flex gap-4 border-b border-gray-600 pb-3.5'>
                {DETAILS_NAV_ITEMS.map((item, index) => (
                    <span
                        key={index}
                        className={`${activeDetailsNavItem === item ? 'font-bold text-secondary' : 'text-white'} text-xl transition-all cursor-pointer`}
                        onClick={() => dispatch(setActiveDetailsNavItem(item))}
                    >
                        {item}
                    </span>
                ))}
            </nav>
            {componentMap[activeDetailsNavItem] || (
                <div className='text-white text-center mt-4'>No Content Available</div>
            )}

        </section>
    )
}
