import { toggleShowGPTSearch } from '@/utils/variableSlice';
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';

export default function GptSearch() {
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        dispatch(toggleShowGPTSearch());
      }
    }

    const handleClickOutside = (event) => {
      if(searchRef.current && !searchRef.current.contains(event.target)) {
        dispatch(toggleShowGPTSearch());
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div className='fixed w-screen h-screen flex items-center justify-center left-0 top-0 bg-gray-900/90 backdrop-blur-sm z-50'>
      <div ref={searchRef} className='container bg-gray-800 rounded-lg flex flex-col items-center h-[80%]'>
        <div className='p-4 ps-9 w-full border-b border-gray-500 flex items-center justify-center space-x-5 text-gray-400'>
            <svg className='w-5' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <input
              type="text"
              placeholder='Search for movies, actors, directors...'
              className='focus:outline-none text-lg grow text-white placeholder:text-gray-500 bg-transparent py-2'
            />
            <button className='bg-secondary text-white hover:bg-secondary/80 text-lg cursor-pointer px-6 py-2 rounded-md'>Search</button>
        </div>
      </div>
    </div>
  )
}
