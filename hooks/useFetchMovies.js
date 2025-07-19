import { BASE_URL, OPTIONS } from "@/utils/constants";
import { addCategory } from "@/utils/movieSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useFetchMovies = (types) => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchMovies();
    }, []);

    // Functions
    const fetchMovies = async () => {
        if (Array.isArray(types)) {
            const fetchPromises = types.map(type => 
                fetch(BASE_URL + 'movie/' + type + "?language=en-US&page=1", OPTIONS)
                    .then(response => response.json())
                    .then(data => ({ type, data }))
            );
            const results = await Promise.all(fetchPromises);
            results.forEach(({ type, data }) => {
                dispatch(addCategory({ typeKey: type, movies: data.results }));
            });
        }
    }
}

export default useFetchMovies;