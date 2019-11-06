const categories = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_CATEGORIES":
      return [...state, ...action.payload.categories];

    case "ADD_CATEGORY":
      return [
        ...state,
        {
          name: action.payload.name,
          id: action.payload.id
        }
      ];
    case "REMOVE_CATEGORY":
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export default categories;
