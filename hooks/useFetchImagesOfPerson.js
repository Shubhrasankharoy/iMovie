import { BASE_URL, OPTIONS } from '@/utils/constants';
import { setImages } from '@/utils/personDetailsSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const useFetchImagesOfPerson = (personId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!personId) return;

        const fetchImages = async () => {
            try {
                const response = await fetch(`${BASE_URL}person/${personId}/images`,OPTIONS);
                if (!response.ok) {
                    throw new Error('Failed to fetch images');
                }
                const data = await response.json();
                dispatch(setImages(data));
            } catch (err) {
                console.error('Error fetching images:', err);
            }
        };

        fetchImages();
    }, [personId]);

}

export default useFetchImagesOfPerson;