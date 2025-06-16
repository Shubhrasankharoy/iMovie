"use client"
import Header from '@/components/Header'
import useFetchMovies from '@/hooks/useFetchMovies'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import VideoContainer from './VideoContainer'

export default function page() {
  const categories = useSelector((state) => state.categories)
  useFetchMovies("now_playing")

  if(!categories) return;


  return (
    <section className="relative min-h-screen flex justify-center">
      <div className="w-screen flex flex-col mx-auto z-10">
        <Header />
        <VideoContainer />
      </div>
    </section>
  )
}
