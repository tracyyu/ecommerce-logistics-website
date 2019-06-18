import axios from 'axios';

function getProducts() {
    let url =
      "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
    return axios.get(url)
        .then(response => {
            //console.log(response);
            return response;
    });
  }
  
  function fakeGetProducts() {
    return new Promise(resolve => {
      // Resolve after a timeout so we can see the loading indicator
      setTimeout(
        () =>
          resolve({
            products: [
              {
                id: 0,
                name: "Apple"
              },
              {
                id: 1,
                name: "Bananas"
              },
              {
                id: 2,
                name: "Strawberries"
              }
            ]
          }),
        1000
      );
    });
  }
  
  export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return getProducts()
        .then(json => {
          dispatch(fetchProductsSuccess(json.data));
          return json.data;
        })
        .catch(error =>
          dispatch(fetchProductsFailure(error))
        );
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  

export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});