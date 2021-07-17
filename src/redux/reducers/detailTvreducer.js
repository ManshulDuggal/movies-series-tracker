const initState = {
  trailers: [],
  detailSeries: [],
  reviews: [],
  isLoading: true,
};

const detailSeriesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL_SERIES":
      return {
        ...state,
        detailSeries: action.payload.detailSeries,
        reviews: action.payload.reviews,
        trailers: action.payload.trailers,
        isLoading: false,
      };
    case "LOADING_DETAILS":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default detailSeriesReducer;
