// const MOVIE_KEY = process.env.REACT_APP_MOVIE_API;
const MOVIE_KEY = "7b767cb1f6ff308019e341ccfdb06a29";
const base_url = "https://api.themoviedb.org/";
const Popular = `3/discover/movie?api_key=${MOVIE_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate`;
const PopularSeries = `3/tv/popular?api_key=${MOVIE_KEY}&language=en-US&page=2`;

const Trending = `3/trending/movie/day?api_key=${MOVIE_KEY}`;
const TrendingSeries = `3/trending/tv/week?api_key=${MOVIE_KEY}`;

export const popularMovies = () => `${base_url}${Popular}`;
export const trendingMovies = () => `${base_url}${Trending}`;
export const trendingSeries = () => `${base_url}${TrendingSeries}`;
export const popularSeries = () => `${base_url}${PopularSeries}`;

export const GetInfoMovie = (get_id) =>
  `${base_url}3/movie/${get_id}?api_key=${MOVIE_KEY}&language=en-US`;
export const GetReviewMovie = (get_id) =>
  `${base_url}3/movie/${get_id}/reviews?api_key=${MOVIE_KEY}&language=en-US`;

export const GetInfoSeries = (get_id) =>
  `${base_url}3/tv/${get_id}?api_key=${MOVIE_KEY}&language=en-US`;
export const GetReviewSeries = (get_id) =>
  `${base_url}3/tv/${get_id}/reviews?api_key=${MOVIE_KEY}&language=en-US`;

export const GetTrailers = (get_id) =>
  `${base_url}3/movie/${get_id}/videos?api_key=${MOVIE_KEY}&language=en-US`;
export const GetTrailersSeries = (get_id) =>
  `${base_url}3/tv/${get_id}/videos?api_key=${MOVIE_KEY}&language=en-US`;

export const previewMovies = (get_id) =>
  `${base_url}3/movie/${get_id}/videos?api_key=${MOVIE_KEY}&language=en-US`;
export const previewSeries = (get_id) =>
  `${base_url}3/tv/${get_id}/videos?api_key=${MOVIE_KEY}&language=en-US`;
