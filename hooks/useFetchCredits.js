import { BASE_URL, OPTIONS } from "@/utils/constants";
import { setCredits } from "@/utils/trailerMovieDetailsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useFetchCredits = (movieId) => {
    const dispatch = useDispatch();

    
    
    useEffect(() => {
        if (!movieId) return;
        const fetchCredits = async () => {
            try {
                const response = await fetch(BASE_URL + movieId + '/credits', OPTIONS);
                const data = await response.json();
                dispatch(setCredits(data));
                return data;
            } catch (err) {
                console.error("Failed to fetch credits:", err);
                return null;
            }
        }

        fetchCredits();
    }, [movieId]);

};

export default useFetchCredits;