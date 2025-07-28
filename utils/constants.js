export const BG_URL = 'bg.jpg';
export const DEFAULT_POSTER_URL = "https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg";

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
export const MOVIE_SEARCH_BASE_URL = 'https://api.themoviedb.org/3/search/movie?query=';
export const MOVIE_GENRE_BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';

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


export const TECH_STACKS = [
  {
    tooltipContent: 'Node.js',
    imgURL: 'stacks/nodejs.svg',
    class: 'bg-radial from-white to-black rounded-full'
  },
  {
    tooltipContent: 'TailwindCSS',
    imgURL: 'stacks/tailwind.svg',
    class: ''
  },
  {
    tooltipContent: 'Redux Toolkit',
    imgURL: 'stacks/redux.svg',
    class: ''
  },
  {
    tooltipContent: 'Firebase',
    imgURL: 'stacks/Firebase.svg',
    class: ""
  },
  {
    tooltipContent: 'TMDB API',
    imgURL: 'stacks/tmdb.svg',
    class: ''
  },
  {
    tooltipContent: 'GPT API',
    imgURL: 'stacks/openai.svg',
    class: ''
  }
]

export const FEATURES = [
  {
    heading: 'Personalized AI Recs',
    points: ["Smart, GPT-powered movie suggestions", 'Tailored picks based on your mood or queries']
  },
  {
    heading: 'Cinematic Experience',
    points: ['HD trailers & immersive backgrounds', 'Stunning, movie-focused design']
  },
  {
    heading: 'Real-time Trends',
    points: ['Browse trending, top-rated, and upcoming films', 'Always fresh picks with TMDB integration']
  }
]

export const AVAILABLE_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "bn", label: "Bengali" },
  { code: "ta", label: "Tamil" },
  { code: "te", label: "Telugu" },
  { code: "ml", label: "Malayalam" },
  { code: "kn", label: "Kannada" },
  { code: "mr", label: "Marathi" },
  { code: "pa", label: "Punjabi" },
  { code: "gu", label: "Gujarati" },
  { code: "ur", label: "Urdu" },
  { code: "or", label: "Odia" },
  { code: "as", label: "Assamese" },
  { code: "bho", label: "Bhojpuri" },
  { code: "sa", label: "Sanskrit" },
  { code: "kok", label: "Konkani" },
  { code: "tcy", label: "Tulu" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "ja", label: "Japanese" },
  { code: "ko", label: "Korean" },
  { code: "zh", label: "Chinese" },
  { code: "th", label: "Thai" },
  { code: "ru", label: "Russian" },
  { code: "ar", label: "Arabic" }
];
 