import useFetchVideo from '@/hooks/useFetchVideo';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function VideoBackground() {
    const firstMovieDetails = useSelector((state) => state.categories[0]?.movies[0]);
    const videoKey = useFetchVideo(firstMovieDetails?.id);



    return (
        videoKey ? (
            <div className='w-screen absolute left-0'>
                <iframe
                    className='aspect-video w-full'
                    src={"https://www.youtube.com/embed/" + videoKey + "?&autoplay=1&mute=1"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>
        ) : (
            <></>
        )

    )

}
