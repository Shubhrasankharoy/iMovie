import { BASE_URL, OPTIONS } from '@/utils/constants';
import { setMovieCredits } from '@/utils/personDetailsSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const useFetchMovieCreditsOfPerson = (personId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!personId) return;

        const fetchMovieCredits = async () => {
            try {
                const response = await fetch(`${BASE_URL}person/${personId}/movie_credits`,OPTIONS);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie credits');
                }
                const data = await response.json();
                dispatch(setMovieCredits(data));
            } catch (err) {
                console.error('Error fetching movie credits:', err);
            }
        };

        fetchMovieCredits();
    }, [personId]);

}

export default useFetchMovieCreditsOfPerson;