import { BASE_IMAGE_URL } from '@/utils/constants';
import React from 'react'
import { useSelector } from 'react-redux';

export default function ReviewPart() {
    const reviews = useSelector((state) => state.trailerMovieDetails?.reviews?.results);
    const movieDetails = useSelector((state) => state.trailerMovieDetails?.movieDetails);

    if (!movieDetails || !reviews) return null;

    const { vote_average, vote_count } = movieDetails;
    

    return (
        <>
            <div className='py-8 w-full animate-fade-up animate-duration-400'>
                <div className='flex items-center gap-2 mb-4'>
                    <svg className='w-16 text-yellow-400' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg>
                    <h1 className='text-white text-5xl font-bold'>{vote_average}</h1>
                    <span>{'(' + vote_count + ' votes)'}</span>
                </div>
            </div>
            <div>
                {reviews && reviews.length > 0 ? (
                    reviews.map((review, index) => {
                        if (!review.author_details) return null;
                        if (!review.content) return null;
                        const { author_details, content, created_at } = review;
                        return(
                        <div key={index} className={`border-b flex border-gray-600 py-4 animate-fade-up animate-duration-[${400 + 200 * index}ms]`}>
                            <div className='shrink-0 mr-4'>
                                {author_details?.avatar_path === null ? (
                                    <div className="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                        <svg className="absolute w-14 h-14 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                    </div>
                                ) : (
                                    <img
                                        className='rounded-full w-12 h-12'
                                        src={BASE_IMAGE_URL + author_details.avatar_path}
                                        alt={author_details.name || 'Anonymous'}
                                    />
                                )}
                            </div>
                            <div>
                                <div>
                                    <h2 className='text-white font-bold'>{author_details?.name || 'Anonymous'}</h2>
                                    <p className='text-gray-400 text-sm flex items-center gap-0.5'>
                                        <span>{author_details?.username || "Unknown"}</span>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor"></path></svg>
                                        <span>{new Date(created_at).toLocaleDateString()}</span>
                                    </p>
                                </div>
                                <p className='text-gray-300 mt-2 text-justify'>{content}</p>
                            </div>
                        </div>
                    )
                })
            ) : (
                <p className='text-gray-400'>No reviews available.</p>
            )}
            </div>
        </>
    )
}