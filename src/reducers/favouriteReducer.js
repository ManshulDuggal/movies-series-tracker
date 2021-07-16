const initState = {
  favourites: [],
};

const favouriteReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state,
          favorites: {
            ...state,
            favorites: [...state.favorites, action.payload],
          },
        },
      };
    default:
      return { ...state };
  }
};

export default favouriteReducer;
