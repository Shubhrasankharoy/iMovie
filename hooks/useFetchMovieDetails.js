import { BASE_URL, OPTIONS } from "@/utils/constants";
import { setMovieDetails } from "@/utils/trailerMovieDetailsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useFetchMovieDetails = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await fetch(BASE_URL + 'movie/' + movieId, OPTIONS);
            const data = await response.json();
            dispatch(setMovieDetails(data));
        };

        if (movieId) {
            fetchMovieDetails();
        }
    }, [movieId, dispatch]);
}

export default useFetchMovieDetails;