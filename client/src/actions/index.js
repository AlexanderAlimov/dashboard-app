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
      .then(data => {
        console.log(data.data);
        dispatch(addProductSync(data.data));
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
      .then(data => {
        dispatch(removeProductSync(data.data));
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
      .then(data => {
        console.log(data.data);
        dispatch(removeCategorySync(data.data));
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
      .then(data => {
        dispatch(addCategorySync(data.data));
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

export function getProducts(catId = undefined) {
  const url = catId ? `/api/products/?category=${catId}` : `/api/products`;
  return dispatch => {
    return fetch(url)
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
