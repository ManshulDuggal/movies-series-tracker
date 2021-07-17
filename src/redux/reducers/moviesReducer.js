const initState = {
  popularMovies: [],
  trendingMovies: [],
};

export const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        popularMovies: action.payload.popularMovies,
        trendingMovies: action.payload.trendingMovies,
      };
    default:
      return { ...state };
  }
};
