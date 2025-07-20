import { BASE_URL, OPTIONS } from '@/utils/constants';
import { setTvCredits } from '@/utils/personDetailsSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const useFetchTvCreditsOfPerson = (personId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!personId) return;

        const fetchTvCredits = async () => {
            try {
                const response = await fetch(`${BASE_URL}person/${personId}/tv_credits`,OPTIONS);
                if (!response.ok) {
                    throw new Error('Failed to fetch TV credits');
                }
                const data = await response.json();
                dispatch(setTvCredits(data));
            } catch (err) {
                console.error('Error fetching TV credits:', err);
            }
        };

        fetchTvCredits();
    }, [personId]);

}

export default useFetchTvCreditsOfPerson;