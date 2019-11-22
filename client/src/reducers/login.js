const isLogin = (state = false, action) => {
  switch (action.type) {
    case "IS_LOGIN":
      return action.payload;
    default:
      return state;
  }
};

export default isLogin;
