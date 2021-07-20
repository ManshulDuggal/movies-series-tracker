export const favoriteAddAction = (id) => {
  return {
    type: "ADD_FAVOURITE",
    payload: id,
  };
};
export const favoriteRemoveAction = (id) => {
  return {
    type: "REMOVE_FAVOURITE",
    payload: id,
  };
};
