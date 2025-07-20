export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg";
export const DEFAULT_POSTER_URL = "https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg";

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
export const MOVIE_SEARCH_BASE_URL = 'https://api.themoviedb.org/3/search/movie?query=';
export const MOVIE_GENRE_BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list?language=en-US';

export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN
  }
};


export const CATEGORIES = ['now_playing', 'popular', 'top_rated', 'upcoming'];
export const DETAILS_NAV_ITEMS = ['Overview', 'Reviews', 'Cast', 'Crew', 'Recommendations'];
export const PERSON_DETAILS_NAV_ITEMS = ['Details', 'Movies', 'TV Shows', 'Images'];