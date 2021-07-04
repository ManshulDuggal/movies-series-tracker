const initState = {
  movieList: [],
  popularSeries: [],
  trendingSeries: [],
};

export const seriesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SERIES":
      return {
        ...state,
        popularSeries: action.payload.popularSeries,
        trendingSeries: action.payload.trendingSeries,
      };
    default:
      return { ...state };
  }
};
