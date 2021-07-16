const initState = {
  favorites: [],
};

const favouriteReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,

        favorites: [...state.favorites, action.payload],
      };
    default:
      return { ...state };
  }
};

export default favouriteReducer;
