const initState = {
  newList: [],
};

const newListReducer = (state = initState, action) => {
  switch (action.type) {
    case "NEW_LIST":
      return {
        ...state,

        newList: action.payload,
      };
    default:
      return { ...state };
  }
};

export default newListReducer;
