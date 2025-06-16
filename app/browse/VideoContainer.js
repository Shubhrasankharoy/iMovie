import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

export default function VideoContainer() {
  return (
    <div className='absolute top-0 z-0'>
      <VideoTitle />
      <VideoBackground />
    </div>
  )
}
