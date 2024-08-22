import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "./shopReducers";
import shoppingInfoReducer from "./shoppingInfoReeducer";
import shoppingCartReducer from "./shoppingCartReducer";

let store = configureStore({
    reducer: {
        shop: shopReducer,
        shoppingInfo: shoppingInfoReducer,
        shoppingCart: shoppingCartReducer,
    }
});

export default store;