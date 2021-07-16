export const favouriteActions = (id) => {
  return {
    type: "ADD_FAVOURITE",
    payload: id,
  };
};
