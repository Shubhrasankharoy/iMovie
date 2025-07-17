import { fetchCardDetails } from '@/utils/cardDetailsSlice';
import { BASE_IMAGE_URL } from '@/utils/constants';
import React, { forwardRef, useState} from 'react'
import { useDispatch } from 'react-redux';

const MovieList = forwardRef(({ movies }, ref) => {
    const [timeoutVar, setTimeoutVar] = useState(null);
    const [hoverId, setHoverId] = useState(null);

    const dispatch = useDispatch();

    const handleMouseEnter = (movieId) => {
        // setHoverId(movieId);
        const timeout = setTimeout(() => {
            console.log("Mouse entered");
            dispatch(fetchCardDetails(movieId))
        }, 2000);
        setTimeoutVar(timeout);
    }

    const handleMouseLeave = () => {
        // setHoverId(null);
        clearTimeout(timeoutVar);
        console.log("Mouse left");
    }

    return (
        <div ref={ref} className='w-full flex overflow-x-auto mb-0 space-x-4 scroll-smooth no-scrollbar'>
            {movies.length > 0 && movies.map((movie) => {
                const { poster_path, title } = movie;
                return (
                    <div 
                    key={movie.id}
                    className='w-32 cursor-pointer shrink-0 relative z-10'
                    // onMouseEnter={() => {handleMouseEnter(movie.id)}}
                    // onMouseLeave={handleMouseLeave}
                    >
                        {/* {hoverId === movie.id && (
                            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-52 h-full bg-black z-30 flex items-center justify-center text-white text-sm font-semibold'>
                                Loading details...
                            </div>
                        )} */}
                        <img
                            className='w-full object-cover rounded-md'
                            src={BASE_IMAGE_URL + poster_path}
                            alt={title} />
                    </div>
                )
            })}
        </div>
    )
})

export default MovieList;
