const handleResponse = (callback, dispatch) => ({ data, message }) => {
  return dispatch(message ? isError(message.message) : callback(data));
};
export const dispatchWithParams = (dispatch, callback) => (obj = null) => {
  return dispatch(callback(obj));
};

export function logIn(auth) {
  return dispatch => {
    dispatch(removeError());
    return fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(auth)
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };
}

export function logOut() {
  return dispatch => {
    dispatch(removeError());
    return fetch(`/api/logout`)
      .then(response => response.json())
      .then(result => console.log(result));
  };
}

export function addProduct(prod) {
  return dispatch => {
    dispatch(removeError());
    return fetch(`/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(prod)
    })
      .then(response => response.json())
      .then(handleResponse(addProductSync, dispatch));
  };
}
const addProductSync = payload => {
  return {
    type: "ADD_PRODUCT",
    payload
  };
};

export function removeProduct(prodId) {
  return dispatch => {
    dispatch(removeError());
    return fetch(`/api/products/${prodId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    })
      .then(response => response.json())
      .then(handleResponse(removeProductSync, dispatch));
  };
}

const removeProductSync = id => {
  return {
    type: "REMOVE_PRODUCT",
    id
  };
};

export function removeCategory(catId) {
  return dispatch => {
    dispatch(removeError());
    return fetch(`/api/categories/${catId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    })
      .then(response => response.json())
      .then(handleResponse(removeCategorySync, dispatch));
  };
}
const removeCategorySync = id => {
  return {
    type: "REMOVE_CATEGORY",
    id
  };
};

export function addCategory(category) {
  return dispatch => {
    dispatch(removeError());
    return fetch(`/api/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(category)
    })
      .then(response => response.json())
      .then(handleResponse(addCategorySync, dispatch));
  };
}

const addCategorySync = payload => {
  return {
    type: "ADD_CATEGORY",
    payload
  };
};

export const editProduct = prod => {
  return dispatch => {
    dispatch(removeError());
    return fetch(`/api/products/${prod.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(prod)
    })
      .then(response => response.json())
      .then(handleResponse(editProductSync, dispatch));
  };
};

export const editProductSync = payload => ({
  type: "EDIT_PRODUCT",
  payload
});

export function getCategories() {
  return dispatch => {
    dispatch(removeError());
    return fetch(`/api/categories`)
      .then(response => response.json())
      .then(handleResponse(receiveCategories, dispatch));
  };
}

const receiveCategories = payload => {
  return {
    type: "RECEIVE_CATEGORIES",
    payload
  };
};

export function getProducts(catId = undefined) {
  ////this is hot fix , need to debug properly
  if (typeof catId === "object") catId = undefined;
  ////////////////////////////////////////////
  const url = catId ? `/api/products/?category=${catId}` : `/api/products`;
  return dispatch => {
    dispatch(removeError());
    return fetch(url)
      .then(response => response.json())
      .then(handleResponse(receiveProducts, dispatch));
  };
}

const receiveProducts = payload => {
  return {
    type: "RECEIVE_PRODUCTS",
    payload
  };
};

const isError = payload => {
  return {
    type: "IS_ERROR",
    payload
  };
};

export const removeError = () => {
  return {
    type: "REMOVE_ERROR"
  };
};
