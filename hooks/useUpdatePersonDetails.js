import useFetchImagesOfPerson from "./useFetchImagesOfPerson";
import useFetchMovieCreditsOfPerson from "./useFetchMovieCreditsOfPerson";
import useFetchPersonDetails from "./useFetchPersonDetails";
import useFetchTvCreditsOfPerson from "./useFetchTVCreditsOfPerson";



const useUpdatePersonDetails = (personId) => {
    useFetchPersonDetails(personId);
    useFetchMovieCreditsOfPerson(personId);
    useFetchTvCreditsOfPerson(personId);
    useFetchImagesOfPerson(personId);
}

export default useUpdatePersonDetails;