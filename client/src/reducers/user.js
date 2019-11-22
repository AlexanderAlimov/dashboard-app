const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: []
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "IS_LOGIN":
      return {
        ...state,
        isLoggedIn: action.payload
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.payload
      };
    case "IS_ERROR":
      return {
        ...state,
        error: [action.payload]
      };
    case "REMOVE_ERROR":
      return {
        ...state,
        error: []
      };
    default:
      return state;
  }
};

export default user;
