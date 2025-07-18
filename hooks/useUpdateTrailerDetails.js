import { use } from "react";
import useFetchMovieDetails from "./useFetchMovieDetails";
import useFetchVideo from "./useFetchVideo";
import useFetchCredits from "./useFetchCredits";


const useUpdateTrailerDetails = (movieId) => {
    useFetchVideo(movieId);
    useFetchMovieDetails(movieId);
    useFetchCredits(movieId);
}

export default useUpdateTrailerDetails;