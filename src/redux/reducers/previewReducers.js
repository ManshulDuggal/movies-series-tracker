const initState = {
  previewMovies: [],
  previewSeries: [],
};

const previewReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PREVIEWS":
      return {
        ...state,
        previewMovies: action.payload.previewMovies,

        isLoading: false,
      };
    case "GET_PREVIEWS_SERIES":
      return {
        ...state,
        previewSeries: action.payload.previewSeries,

        isLoading: false,
      };

    case "LOADING_DETAILS":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default previewReducer;
