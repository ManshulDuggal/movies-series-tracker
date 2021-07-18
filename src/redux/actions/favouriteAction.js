export const favoriteAddAction = (movie) => {
  return {
    type: "ADD_FAVOURITE",
    payload: movie,
  };
};
export const favoriteRemoveAction = (movie) => {
  return {
    type: "REMOVE_FAVOURITE",
    payload: movie,
  };
};
