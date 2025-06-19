export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg";
export const BASE_URL = 'https://api.themoviedb.org/3/movie/';
export const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN
  }
};