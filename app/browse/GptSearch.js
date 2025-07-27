import { MOVIE_SEARCH_BASE_URL, OPTIONS, BASE_IMAGE_URL } from '@/utils/constants';
import { openAIRequest } from '@/utils/openAI';
import { toggleShowGPTSearch, updateSuggestedSearches } from '@/utils/variableSlice';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function GptSearch() {
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const [searchText, setSearchText] = useState("");

  const suggestedSearches = useSelector((state) => state.variables.suggestedSearches);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        dispatch(toggleShowGPTSearch());
      }
      if (event.key === 'Enter' && searchText.trim() !== '') {
        handleSearch();
      }
    }


    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        dispatch(toggleShowGPTSearch());
      }
    }


    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, searchText]);


  const handleSearch = async (e) => {
    if (e?.preventDefault) e.preventDefault();
    console.log(`Searching for: ${searchText}`);

    try {
      const data = await openAIRequest(`Search for: ${searchText}`, {
        temperature: 0.7,
        max_tokens: 100,
      });

      const content = data.choices?.[0]?.message?.content;
      if (!content)
        return console.error('No content received from OpenAI API.');

      if (content.includes('Error: I am not allowed to answer such questions.'))
        return console.error('Error: I am not allowed to answer such questions. I only help with movie suggestions.');

      const promiseArray = content.split(',').map((movie) => searchMovieTMDB(movie));

      const movies = await Promise.all(promiseArray);

      dispatch(updateSuggestedSearches(movies));

      console.log('Suggested Movies:', movies);

    } catch (error) {
      console.error('Search failed:', error);
    }
  }

  const searchMovieTMDB = async (movieName) => {
    try {
      const response = await fetch(MOVIE_SEARCH_BASE_URL + movieName + "&include_adult=false&page=1", OPTIONS);
      const data = await response.json();
      console.log('Movie search results:', data);

      return data.results;
    } catch (error) {
      console.error('Error fetching movie data:', error);
      return [];
    }
  }

  return (
    <div className='fixed w-screen h-screen flex items-center justify-center left-0 top-0 bg-gray-900/90 backdrop-blur-sm z-50'>
      <div ref={searchRef} className='container bg-gray-800 rounded-lg flex flex-col items-center h-[80%] overflow-hidden'>

        <div className='p-4 ps-9 w-full border-b border-gray-500 flex items-center justify-center space-x-5 text-gray-400'>
          <svg className='w-5' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <input
            autoFocus
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder='Search for movies, actors, directors...'
            className='focus:outline-none text-lg grow text-white placeholder:text-gray-500 bg-transparent py-2'
          />
          <button onClick={handleSearch} className='bg-secondary text-white hover:bg-secondary/80 text-lg cursor-pointer px-6 py-2 rounded-md'>Search</button>
        </div>

        <div className="flex flex-wrap gap-5 justify-between p-4 overflow-y-auto h-auto w-full">
          {suggestedSearches && suggestedSearches.length > 0 ? (
            suggestedSearches.map((movie) => {
              const { id, title, overview, poster_path } = movie[0];
              return (
                <div key={id} className='bg-gray-700 p-4 rounded-lg w-64'>
                  {poster_path ? (
                    <img
                      src={BASE_IMAGE_URL + poster_path}
                      alt={title}
                      className='w-full h-40 object-cover rounded-md mb-2'
                    />
                  ) : (
                    <div className='w-full h-40 bg-gray-600 rounded-md mb-2 flex items-center justify-center'>
                      <span className='text-gray-400'>No Image Available</span>
                    </div>
                  )}
                  <h3 className='text-white text-lg font-semibold'>{title}</h3>
                  <p className='text-gray-400 text-sm'>{overview}</p>
                </div>
              )
            })
          ) : (
            <p className='text-gray-400'>No suggestions available. Please search for something.</p>
          )}
        </div>
      </div>
    </div>
  )
}
