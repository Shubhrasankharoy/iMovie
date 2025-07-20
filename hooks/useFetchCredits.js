import { BASE_URL, OPTIONS } from "@/utils/constants";
import { setCredits } from "@/utils/trailerMovieDetailsSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useFetchCredits = (movieId) => {
    const dispatch = useDispatch();


    useEffect(() => {
        if (!movieId) return;
        const fetchCredits = async () => {
            try {
                const response = await axios.get(BASE_URL + 'movie/' + movieId + '/credits', OPTIONS);
                const data = response.data;
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