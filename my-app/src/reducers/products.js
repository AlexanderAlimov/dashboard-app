const initialState = [
  {
    id: "1",
    name: "product1",
    purchPrice: 200,
		salePrice: 300,
		categoryId: 1,
  },
  {
    id: "2",
    name: "product2",
    purchPrice: 200,
		salePrice: 400,
		categoryId: 2,
  },
  {
    id: "3",
    name: "product3",
    purchPrice: 300,
		salePrice: 500,
		categoryId: 2,
  },
  {
    id: "4",
    name: "product4",
    purchPrice: 400,
		salePrice: 600,
		categoryId: 1,
  }
];
const products = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_PRODUCT":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          purchPrice: action.payload.purchPrice,
          salePrice: action.payload.salePrice
        }
			];
			
    case "REMOVE_PRODUCT":
			return state.filter(item => item.id !== action.id);

		case "SHOW_FILTER_PRODUCTS":
			return state.filter(item => item.categoryId === action.id)

		case "REMOVE_CATEGORY":
			const productsByDelCategory = state.filter(item => item.categoryId === action.id);
			const productWithoutCategory = productsByDelCategory.map(item=>({
					...item,
					categoryId : 5
				}))
			const productWithCategory = state.filter(item=>(item.categoryId !== action.id));
			return [...productWithCategory , ...productWithoutCategory];

    default:
      return state;
  }
};

export default products;
