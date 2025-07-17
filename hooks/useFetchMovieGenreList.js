import { MOVIE_GENRE_BASE_URL, OPTIONS } from "@/utils/constants";
import { setMovieGenres } from "@/utils/variableSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useFetchMovieGenreList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovieGenres = async () => {
      const response = await fetch(MOVIE_GENRE_BASE_URL, OPTIONS);
      const data = await response.json();
      dispatch(setMovieGenres(data.genres));
    };

    fetchMovieGenres();
  }, [dispatch]);
};

export default useFetchMovieGenreList;