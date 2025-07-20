import { PERSON_DETAILS_NAV_ITEMS } from '@/utils/constants'
import { setActivePersonDetailsNavItem } from '@/utils/variableSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DetailsPart from './DetailsPart';
import MoviePart from './MoviePart';
import TvShowsPart from './TvShowsPart';
import ImagesPart from './ImagesPart';

export default function DetailsSection() {
    const dispatch = useDispatch();
    const activeDetailsNavItem = useSelector((state) => state.variables?.activePersonDetailsNavItem);


    return (
        <section className='w-screen text-white py-10'>
            <div className='container mx-auto'>
                <ul className='w-full flex items-center bg-linear-to-b from-black to-gray-900/50 space-x-4 border-b border-gray-700'>
                    {PERSON_DETAILS_NAV_ITEMS.map((item, index) => (
                        <li 
                        key={index} 
                        className={`${activeDetailsNavItem === item ? 'font-bold text-secondary' : 'text-white'} py-2 px-4 transition-all duration-200 font-semibold rounded cursor-pointer`}
                        onClick={() => dispatch(setActivePersonDetailsNavItem(item))}
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {activeDetailsNavItem === 'Details' && <DetailsPart />}
                {activeDetailsNavItem === 'Movies' && <MoviePart />}
                {activeDetailsNavItem === 'TV Shows' && <TvShowsPart />}
                {activeDetailsNavItem === 'Images' && <ImagesPart />}
            </div>
        </section>
    )
}