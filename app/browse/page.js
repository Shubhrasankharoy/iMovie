"use client"
import Header from '@/components/Header'
import useFetchMovies from '@/hooks/useFetchMovies'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import useFetchVideo from '@/hooks/useFetchVideo'
import Category from './Category'
import GptSearch from './GptSearch'

export default function page() {
  const firstMovieDetails = useSelector((state) => state.categories[0]?.movies[0]);
  const videoKey = useFetchVideo(firstMovieDetails?.id);
  const categories = useSelector((state) => state.categories);
  const showGPTSearch = useSelector((state) => state.variables.showGPTSearch);
  useFetchMovies("now_playing");
  useFetchMovies("popular");
  useFetchMovies("top_rated");
  useFetchMovies("upcoming");


  if (!categories) return;

  return (
    <>
      <section className="relative flex justify-center">
        <VideoBackground videoKey={videoKey} />
        <VideoTitle movieDetails={firstMovieDetails} />
        <div className="w-screen flex flex-col mx-auto z-10">
          <Header />
        </div>
      </section>
      <section className='w-screen relative z-10'>
        <div className='container mx-auto flex flex-col overflow-hidden space-y-5'>
          {categories.length > 0 && categories.map((category, index) => {
            const { typeKey, movies } = category;
            return (
              <Category key={typeKey + index} typeKey={typeKey} movies={movies} />
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
