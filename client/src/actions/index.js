export function addProduct(prod) {
  return dispatch => {
    return fetch(`/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(prod)
    })
      .then(response => response.json())
      .then(({ data, message }) => {
        message ? dispatch(isError(message)) : dispatch(addProductSync(data));
      });
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
    return fetch(`/api/products/${prodId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    })
      .then(response => response.json())
      .then(({ data, message }) => {
        message
          ? dispatch(isError(message))
          : dispatch(removeProductSync(data));
      });
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
    return fetch(`/api/categories/${catId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    })
      .then(response => response.json())
      .then(({ data, message }) => {
        message
          ? dispatch(isError(message))
          : dispatch(removeCategorySync(data));
      });
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
    return fetch(`/api/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(category)
    })
      .then(response => response.json())
      .then(({ data, message }) => {
        message ? dispatch(isError(message)) : dispatch(addCategorySync(data));
      });
  };
}

const addCategorySync = payload => {
  return {
    type: "ADD_CATEGORY",
    payload
  };
};

export const editProduct = payload => ({
  type: "EDIT_PRODUCT",
  payload
});

export function getCategories() {
  return dispatch => {
    return fetch(`/api/categories`)
      .then(response => response.json())
      .then(({ categories, message }) => {
        message
          ? dispatch(isError(message))
          : dispatch(receiveCategories(categories));
      });
  };
}

const receiveCategories = payload => {
  return {
    type: "RECEIVE_CATEGORIES",
    payload
  };
};

export function getProducts(catId = undefined) {
  const url = catId ? `/api/products/?category=${catId}` : `/api/products`;
  return dispatch => {
    return fetch(url)
      .then(response => response.json())
      .then(({ products, message }) => {
        message
          ? dispatch(isError(message))
          : dispatch(receiveProducts(products));
      });
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

export const removeError = payload => {
  return {
    type: "REMOVE_ERROR",
    payload
  };
};
