const errorDispatch = (mssg, dispatch, successFunc) => {
  mssg ? dispatch(isError(mssg)) : dispatch(successFunc);
};

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
      .then(({ data, message }) => {
        errorDispatch(message, dispatch, addProductSync(data));
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
    dispatch(removeError());
    return fetch(`/api/products/${prodId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    })
      .then(response => response.json())
      .then(({ data, message }) => {
        errorDispatch(message, dispatch, removeProductSync(data));
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
    dispatch(removeError());
    return fetch(`/api/categories/${catId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    })
      .then(response => response.json())
      .then(({ data, message }) => {
        errorDispatch(message, dispatch, removeCategorySync(data));
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
    dispatch(removeError());
    return fetch(`/api/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(category)
    })
      .then(response => response.json())
      .then(({ data, message }) => {
        errorDispatch(message, dispatch, addCategorySync(data));
      });
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
      .then(({ data, message }) => {
        errorDispatch(message, dispatch, editProductSync(data));
      });
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
      .then(({ categories, message }) => {
        errorDispatch(message, dispatch, receiveCategories(categories));
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
    dispatch(removeError());
    return fetch(url)
      .then(response => response.json())
      .then(({ products, message }) => {
        errorDispatch(message, dispatch, receiveProducts(products));
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

export const removeError = () => {
  return {
    type: "REMOVE_ERROR"
  };
};
