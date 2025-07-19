import { BASE_URL, OPTIONS } from "@/utils/constants";
import { setTopLevelDetails } from "@/utils/personDetailsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useFetchPersonDetails = (personId) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!personId) {
            console.error("No person ID provided to useFetchPersonDetails.");
            return;
        }
        const fetchPersonDetails = async () => {
            try {
                const response = await fetch(BASE_URL + 'person/' + personId, OPTIONS);
                if (!response.ok) throw new Error('Failed to fetch person details');

                const data = await response.json();
                dispatch(setTopLevelDetails(data));
            } catch (error) {
                console.error('Error fetching person details:', error);
            }
        };

        fetchPersonDetails();
    }, [personId, dispatch]);
}

export default useFetchPersonDetails;