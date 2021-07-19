const initState = {
  favorites: [],
};

const favoritesReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE": {
      const ids = new Set(state.favorites.map((item) => item.id));
      if (ids.has(action.payload.id)) {
        // Already exists in state, don't add
<<<<<<< HEAD
        alert("already exists in favourite");
        return state;
      }
=======
        return state;
      }
      // doesn't exist in state, add it!
>>>>>>> 89bd5d311f5a5cad3fad7d42920a0ccafa62aaa9
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };
    }
    case "REMOVE_FAVOURITE":
      return {
        favorites: [
          ...state.favorites.filter((fav) => fav.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default favoritesReducer;
