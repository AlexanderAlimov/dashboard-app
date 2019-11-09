const errors = (state = [], action) => {
  switch (action.type) {
    case "IS_ERROR":
      return action.payload;
    case "REMOVE_ERROR":
      return [];
    default:
      return state;
  }
};

export default errors;
