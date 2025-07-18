import { BASE_URL, OPTIONS } from "@/utils/constants"
import { setVideoKeys } from "@/utils/trailerMovieDetailsSlice";
import { useEffect } from "react"
import { useDispatch } from "react-redux";

const useFetchVideo = (movie_id) => {
    const dispatch = useDispatch();
    useEffect(() => {
        getTrailerVideoId();
    }, [movie_id])

    const getTrailerVideoId = async () => {
        if (!movie_id) return;

        try {
            const result = await fetch(BASE_URL + movie_id + "/videos", OPTIONS)
            const data = await result.json();

            dispatch(setVideoKeys(data.results));
        } catch (err) {
            console.log(err);
        }
    }
    
}

export default useFetchVideo;