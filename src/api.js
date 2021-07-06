const MOVIE_KEY = process.env.REACT_APP_MOVIE_API;
const base_url = "https://api.themoviedb.org/";
const Popular = `3/movie/popular?api_key=${MOVIE_KEY}&language=en-US&page=1`;
const PopularSeries = `3/tv/popular?api_key=${MOVIE_KEY}&language=en-US&page=1`;

const Trending = `3/trending/all/week?api_key=${MOVIE_KEY}`;
const TrendingSeries = `3/trending/tv/week?api_key=${MOVIE_KEY}`;

export const popularMovies = () => `${base_url}${Popular}`;
export const trendingMovies = () => `${base_url}${Trending}`;
export const trendingSeries = () => `${base_url}${TrendingSeries}`;
export const popularSeries = () => `${base_url}${PopularSeries}`;

export const GetInfoMovie = (get_id) =>
  `${base_url}3/movie/${get_id}?api_key=${MOVIE_KEY}&language=en-US`;

export const GetInfoSeries = (get_id) =>
  `${base_url}3/tv/${get_id}?api_key=${MOVIE_KEY}&language=en-US`;

export const GetTrailers = (get_id) =>
  `${base_url}3/movie/${get_id}/videos?api_key=${MOVIE_KEY}&language=en-US`;
export const GetTrailersSeries = (get_id) =>
  `${base_url}3/tv/${get_id}/videos?api_key=${MOVIE_KEY}&language=en-US`;
