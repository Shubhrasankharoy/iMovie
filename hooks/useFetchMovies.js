import { BASE_URL, OPTIONS } from "@/utils/constants";
import { addCategory } from "@/utils/movieSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useFetchMovies = (type) => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMovies();
    }, []);

    // Functions
    const fetchMovies = async () => {
        const result = await fetch(BASE_URL + type + "?language=en-US&page=1", OPTIONS);
        const data = await result.json();
        dispatch(addCategory({ typeKey: type, movies: data.results }))
    }
}

export default useFetchMovies;