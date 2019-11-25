const productDetails = (state = {}, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

export default productDetails;
