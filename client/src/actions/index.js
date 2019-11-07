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

export const editProduct = payload => ({
  type: "EDIT_PRODUCT",
  payload
});

export function getCategories() {
  return dispatch => {
    return fetch(`/api/categories`)
      .then(response => response.json())
      .then(data => {
        dispatch(receiveCategories(data));
      });
  };
}

function receiveCategories(payload) {
  return {
    type: "RECEIVE_CATEGORIES",
    payload
  };
}

export function getProducts() {
  return dispatch => {
    return fetch(`/api/products`)
      .then(response => response.json())
      .then(data => {
        dispatch(receiveProducts(data));
      });
  };
}

function receiveProducts(payload) {
  return {
    type: "RECEIVE_PRODUCTS",
    payload
  };
}
export function filterProductsByCategory(id) {
  return dispatch => {
    return fetch(`/api/filterProducts/?id=${id}`)
      .then(response => response.json())
      .then(data => {
        dispatch(filterProducts(data));
      });
  };
}

function filterProducts(payload) {
  return {
    type: "FILTER_PRODUCTS",
    payload
  };
}
