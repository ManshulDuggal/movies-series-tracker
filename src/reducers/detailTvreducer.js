const initState = {
  trailers: [],
  detailSeries: [],
  isLoading: true,
};

const detailSeriesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL_SERIES":
      return {
        ...state,
        detailSeries: action.payload.detailSeries,

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
