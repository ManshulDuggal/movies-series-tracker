import axios from "axios";
import { popularMovies, trendingMovies } from "../api";

//action creator

export const moviesAction = () => async (dispatch) => {
  const popularMovieData = await axios.get(popularMovies());
  const trendingMovieData = await axios.get(trendingMovies());

  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      popularMovies: popularMovieData.data.results,
      trendingMovies: trendingMovieData.data.results,
    },
  });
};
