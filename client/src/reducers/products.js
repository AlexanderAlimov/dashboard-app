const products = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_PRODUCTS":
      return [...state, ...action.payload.products];

    case "FILTER_PRODUCTS":
      return [...action.payload.products];

    case "ADD_PRODUCT":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          purchPrice: Number(action.payload.purchPrice),
          salePrice: Number(action.payload.salePrice),
          categoryId: Number(action.payload.category)
        }
      ];

    case "REMOVE_PRODUCT":
      return state.filter(item => item.id !== action.id);

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
        item.id === action.payload.id
          ? {
              ...item,
              id: action.payload.id,
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
