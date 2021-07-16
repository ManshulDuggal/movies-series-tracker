const initState = {
  favorites: [],
};

const favoritesReducer = (state = initState, action) => {
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

export default favoritesReducer;
