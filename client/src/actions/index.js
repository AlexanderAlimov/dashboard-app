export function addProductAsync(prod) {
  return dispatch => {
    return fetch(`/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(prod)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };
}

export function removeProductAsync(prodId) {
  return dispatch => {
    return fetch(`/api/products/${prodId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };
}

export function removeCategoriesAsync(catId) {
  return dispatch => {
    return fetch(`/api/categories/${catId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };
}

export function addCategoryAsync(category) {
  return dispatch => {
    return fetch(`/api/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(category)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };
}

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
export function filterProductsByCategory(catId) {
  return dispatch => {
    return fetch(`/api/filterProducts/?category=${catId}`)
      .then(response => response.json())
      .then(data => {
        dispatch(receiveProducts(data));
      });
  };
}
