const categories = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_CATEGORIES":
      return action.payload;

    case "ADD_CATEGORY":
      return [...state, action.payload];
    case "REMOVE_CATEGORY":
      return state.filter(item => String(item._id) !== String(action.id));
    default:
      return state;
  }
};

export default categories;
