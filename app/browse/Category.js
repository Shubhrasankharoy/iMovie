import React, { useEffect, useRef, useState } from 'react'
import MovieList from './MovieList'
import { toTitleCase, trackScroll } from '@/utils/functions';
import Link from 'next/link';

export default function Category({ typeKey, movies, autoSlide }) {
  const [category, setCategory] = useState('');
  const [atLeft, setAtLeft] = useState(true);
  const [atRight, setAtRight] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    let categoryKey = typeKey?.toLowerCase().replace('_', ' ');

    categoryKey = toTitleCase(categoryKey);
    setCategory(categoryKey);
  }, [typeKey]);

  useEffect(() => {
    let timeOut;
    if (autoSlide) {
      timeOut = setInterval(() => {
        scrollTo('right')
      }, 3000);
    }

    return () => {
      clearInterval(timeOut)
    }
  }, [])


  const scrollTo = (direction) => {
    const container = scrollRef.current;
    if (direction === "left") {
      container.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    } else {
      container.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  }

  return (

    <div
      className='relative group w-full flex flex-col my-10'
    >
      <div
        className={`absolute h-[80%] text-4xl w-16 bottom-0 left-0 bg-linear-to-r z-40 group-hover:flex hidden ${atLeft ? "invisible" : "visible"} items-center justify-start cursor-pointer from-black/90 transition-all duration-75 text-gray-400 `}
        onClick={() => {
          scrollTo("left");
          trackScroll(scrollRef, setAtLeft, setAtRight);
        }}
      >
        <svg className='w-10 h-10 rotate-180' viewBox="-19.04 0 75.804 75.804" xmlns="http://www.w3.org/2000/svg" fill="#000000">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)">
              <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#969696"></path>
            </g>
          </g>
        </svg>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold mb-5'> {category} </h1>
      </div>

      <MovieList
        movies={movies}
        ref={scrollRef}
      />

      <div
        className={`absolute h-[80%] text-4xl w-16 bottom-0 right-0 bg-linear-to-l z-40 group-hover:flex hidden ${atRight ? "invisible" : "visible"} items-center justify-end cursor-pointer from-black/90 transition-all duration-75 text-gray-400 `}
        onClick={() => {
          scrollTo("right");
          trackScroll(scrollRef, setAtLeft, setAtRight);
        }}
      >
        <svg className='w-10 h-10' viewBox="-19.04 0 75.804 75.804" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)"> <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#969696"></path> </g> </g></svg>
      </div>
    </div>
  )
}
