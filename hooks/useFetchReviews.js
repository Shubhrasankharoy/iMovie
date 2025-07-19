import { BASE_URL, OPTIONS } from "@/utils/constants";
import { setReviews } from "@/utils/trailerMovieDetailsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useFetchReviews = (movieId) => {
    const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async () => {
          try {
            const response = await fetch(`${BASE_URL}movie/${movieId}/reviews`, OPTIONS);
            const data = await response.json();
            dispatch(setReviews(data));
          } catch (error) {
            console.error("Error fetching reviews:", error);
          }
    };

    fetchReviews();
  }, [movieId]);
}

export default useFetchReviews;