import { BASE_URL, OPTIONS } from "@/utils/constants";
import { setImages } from "@/utils/trailerMovieDetailsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";



const useFetchImages = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;
    const fetchImages = async () => {
      try {
        const response = await fetch(`${BASE_URL}${id}/images`, OPTIONS);
        const data = await response.json();
        console.log("Fetched images:", data);
        dispatch(setImages(data));
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [id]);
};

export default useFetchImages;