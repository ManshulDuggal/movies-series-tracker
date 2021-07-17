const initState = {
  detail: { genres: [] },
  trailers: [],
  reviews: [],
  isLoading: true,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        reviews: action.payload.reviews,
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
