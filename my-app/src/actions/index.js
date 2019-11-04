export const addProduct = payload => ({
  type: "ADD_PRODUCT",
  payload
});

export const removeProduct = id => ({
  type: "REMOVE_PRODUCT",
  id
});

export const addCategory = payload => ({
  type: "ADD_CATEGORY",
  payload
});

export const removeCategory = id => ({
  type: "REMOVE_CATEGORY",
  id
});

export const filterProductsByCategory = id => ({
  type: "SHOW_FILTER_PRODUCTS",
  id
});

export const editProduct = payload => ({
  type: "EDIT_PRODUCT",
  payload
});
