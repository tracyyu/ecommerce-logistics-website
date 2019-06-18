import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import cartReducer from './reducers/cart';
import filtersReducer from './reducers/filters';
import productReducer from './reducers/product';
import productsReducer from './reducers/productsReducers';

const store = createStore(
    combineReducers({
        products: productsReducer,
        product: productReducer,
        cart: cartReducer,
        filters: filtersReducer
    }),
    applyMiddleware(thunk)
);

export default store;