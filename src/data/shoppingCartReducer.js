import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: {
        productsInCart: [],
    },
    reducers: {
        addProductToCart(state, action) {
            let productInCart = { ...action.payload, counter: 1 }
            if (!state.productsInCart.some(product => product.id === productInCart.id)) {
                state.productsInCart = [...state.productsInCart, productInCart];
            } else {
                state.productsInCart.forEach((product) => {
                    if (product.id === productInCart.id) {
                        product.counter += 1;
                    }
                })
            }
        },
        removeProductFromCart(state, action) {
            state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload)
        },
        addSetCount(state, action) {
            state.productsInCart.forEach((product) => {
                if (product.id === action.payload) {
                    product.counter += 1;
                }
            })
        },
        remSetCount(state, action) {
            state.productsInCart.forEach((product) => {
                if (product.id === action.payload) {
                    if (product.counter === 1) {
                        state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload)
                    } else {
                        product.counter -= 1;
                    }
                }
            })
        }
    }

})

export const { addProductToCart, removeProductFromCart, addSetCount, remSetCount } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer