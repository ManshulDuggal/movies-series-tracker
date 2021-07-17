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
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favorites: [state.favorites.filter((fav) => fav !== action.payload)],
      };
    default:
      return { ...state };
  }
};

export default favoritesReducer;
