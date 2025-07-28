"use client"

import useFetchMovies from '@/hooks/useFetchMovies'
import { useSelector } from 'react-redux'
import Category from './Category'
import GptSearch from './GptSearch'
import useFetchMovieGenreList from '@/hooks/useFetchMovieGenreList'
import { CATEGORIES } from '@/utils/constants'
import TrailerSection from './TrailerSection'
import useUpdateTrailerDetails from '@/hooks/useUpdateTrailerDetails'

export default function page() {

  const firstMovieDetails = useSelector((state) => state.categories[0]?.movies[0]);
  const categories = useSelector((state) => state.categories);
  const showGPTSearch = useSelector((state) => state.variables.showGPTSearch);
  useUpdateTrailerDetails(firstMovieDetails?.id);
  useFetchMovies(CATEGORIES);
  useFetchMovieGenreList();


  if (!categories) return;

  return (
    <>
    <TrailerSection />
      <section className='w-screen relative -my-96 z-10 bg-gradient-to-b px-20 from-black/10 shadow-lg via-black/80 to-black/90'>
        <div className='w-full flex flex-col overflow-hidden space-y-5'>
          {categories.length > 0 && categories.map((category, index) => {
            const { typeKey, movies } = category;
            return (
              <Category key={typeKey + index} typeKey={typeKey} movies={movies} autoSlide={index == 0} />
            )
          })}
        </div>
      </section>

      {showGPTSearch && (
        <GptSearch />
      )}
    </>
  )
}
