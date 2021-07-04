const initState = {
  detail: { genres: [] },
  trailers: [],
  isLoading: true,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload.detail,
        trailers: action.payload.trailers,
        isLoading: false,
      };
    case "LOADING_DETAILS":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default detailReducer;
