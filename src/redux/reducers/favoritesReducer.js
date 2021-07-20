const initState = {
  favorites: [],
};

const favoritesReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE": {
      const ids = new Set(state.favorites.map((item) => item.id));
      if (ids.has(action.payload.id)) {
        // Already exists in state, don't add
        alert("already exists in favourite");
        return state;
      }
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };
    }
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((fav) => fav.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default favoritesReducer;
