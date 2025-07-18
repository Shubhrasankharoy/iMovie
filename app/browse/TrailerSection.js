import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import Header from '@/components/Header'

export default function TrailerSection() {
  return (
      <section className="relative flex justify-center aspect-video">
        <VideoBackground />
        <VideoTitle />
        <div className="w-screen flex flex-col z-10 h-fit">
          <Header />
        </div>
      </section>
  )
}
