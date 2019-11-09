const categories = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_CATEGORIES":
      return [...state, ...action.payload];

    case "ADD_CATEGORY":
      return [...state, action.payload];
    case "REMOVE_CATEGORY":
      return state.filter(item => Number(item.id) !== Number(action.id));
    default:
      return state;
  }
};

export default categories;
