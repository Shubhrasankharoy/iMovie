import { fetchCardDetails } from '@/utils/cardDetailsSlice';
import { POSTER_URL } from '@/utils/constants';
import React, { forwardRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const MovieList = forwardRef(({ movies, setCategoryHover }, ref) => {
    const [timeoutVar, setTimeoutVar] = useState(null);
    const [hoverId, setHoverId] = useState(null);

    const dispatch = useDispatch();
    const cardData = useSelector(state => state.cardDetails.data)

    const handleMouseEnter = (movieId) => {
        setCategoryHover(true);
        setHoverId(movieId);
        // if(cardData[movieId]) return; 
        // const timeout = setTimeout(() => {
        //     console.log("Mouse entered");
        //     dispatch(fetchCardDetails(movieId))
        // }, 2000);
        // setTimeoutVar(timeout);
    }

    const handleMouseLeave = () => {
        setCategoryHover(false)
        setHoverId(null);
        // clearTimeout(timeoutVar);
        setTimeoutVar(null);
        console.log("Mouse left");
    }

    return (
        <div
            ref={ref}
            className='w-full flex overflow-x-auto mb-0 space-x-4 scroll-smooth no-scrollbar'
        >
            {movies.length > 0 && movies.map((movie) => {
                const { id, poster_path, title } = movie;
                return (
                    <div
                        key={id}
                        className='w-32 cursor-pointer shrink-0 relative z-10'
                        onMouseEnter={() => { handleMouseEnter(id) }}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* {hoverId === id && (
                            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-52 h-full bg-black z-20 flex items-center justify-center text-white text-sm font-semibold'>
                                Loading details...
                            </div>
                        )} */}
                        <img
                            className='w-full object-cover rounded-md'
                            src={POSTER_URL + poster_path}
                            alt={title} />
                    </div>
                )
            })}
        </div>
    )
})

export default MovieList;
