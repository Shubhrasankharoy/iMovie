import { BASE_URL, OPTIONS } from "@/utils/constants";
import { setRecommendations } from "@/utils/trailerMovieDetailsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useFetchRecommendations = (movieId) => {
    const dispatch = useDispatch();

    
    useEffect(() => {
        if (!movieId) return;
        const fetchRecommendations = async () => {
            try {
                const response = await fetch(BASE_URL + movieId + '/recommendations', OPTIONS);
                if (!response.ok) {
                    throw new Error('Failed to fetch recommendations');
                }
                const data = await response.json();
                dispatch(setRecommendations(data.results));
            } catch (err) {
                console.error('Error fetching recommendations:', err);
            }
        };

        fetchRecommendations();
    }, [movieId]);

}

export default useFetchRecommendations;