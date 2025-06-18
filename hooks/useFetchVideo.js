import { BASE_URL, OPTIONS } from "@/utils/constants"
import { useEffect, useState } from "react"

const useFetchVideo = (movie_id) => {
    const [trailerVideoKey, setTrailerVideoKey] = useState(null)
    useEffect(() => {
        getTrailerVideoId(); 
    },[movie_id])

    const getTrailerVideoId = async() => {
        if(!movie_id) return;

        try{
            const result = await fetch(BASE_URL + movie_id + "/videos", OPTIONS)
            const data = await result.json();
            const trailerVideos = data.results.filter((video) => video.type == "Trailer")
            console.log(trailerVideos);
            
            const key = trailerVideos.length > 0 ? trailerVideos[1].key : data.results[0].key;
            console.log(key)
            setTrailerVideoKey(key);
        }catch(err){
            console.log(err);
        }
    }
    
    return trailerVideoKey;
}

export default useFetchVideo;