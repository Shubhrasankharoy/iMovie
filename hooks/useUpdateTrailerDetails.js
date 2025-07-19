import useFetchMovieDetails from "./useFetchMovieDetails";
import useFetchVideo from "./useFetchVideo";
import useFetchCredits from "./useFetchCredits";
import useFetchReviews from "./useFetchReviews";
import useFetchRecommendations from "./useFetchRecommendations";


const useUpdateTrailerDetails = (movieId) => {
    useFetchVideo(movieId);
    useFetchMovieDetails(movieId);
    useFetchCredits(movieId);
    useFetchReviews(movieId);
    useFetchRecommendations(movieId);
}

export default useUpdateTrailerDetails;