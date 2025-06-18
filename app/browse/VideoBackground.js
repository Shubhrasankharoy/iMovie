import useFetchVideo from '@/hooks/useFetchVideo';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function VideoBackground({ videoKey }) {



    return (
        videoKey ? (
            <div className='absolute w-full -top-36 left-0 pointer-events-none z-0'>
                <iframe
                    className='w-full aspect-video'
                    src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
                    title="YouTube video player"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>

        ) : (
            <></>
        )

    )

}
