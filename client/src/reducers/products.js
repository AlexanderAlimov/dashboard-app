const products = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_PRODUCTS":
      return action.payload;

    case "ADD_PRODUCT":
      return [...state, action.payload];

    case "REMOVE_PRODUCT":
      return state.filter(item => String(item._id) !== String(action.id));

    case "REMOVE_CATEGORY":
      const productsByDelCategory = state.filter(
        item => item.categoryId === action.id
      );
      const productWithoutCategory = productsByDelCategory.map(item => ({
        ...item,
        categoryId: 5
      }));
      const productWithCategory = state.filter(
        item => item.categoryId !== action.id
      );
      return [...productWithCategory, ...productWithoutCategory];

    case "EDIT_PRODUCT":
      return state.map(item =>
        item._id === action.payload._id
          ? {
              ...item,
              name: action.payload.name,
              purchPrice: Number(action.payload.purchPrice),
              salePrice: Number(action.payload.salePrice),
              category: action.payload.category
            }
          : item
      );

    default:
      return state;
  }
};

export default products;
