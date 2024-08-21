import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "./shopReducers";
import shoppingInfoReducer from "./shoppingInfoReeducer";

let store = configureStore({
    reducer: {
        shop: shopReducer,
        shoppingInfo: shoppingInfoReducer,
    }
});

export default store;