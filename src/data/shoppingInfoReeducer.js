import {createSlice} from "@reduxjs/toolkit";

const shoppingInfoSlice = createSlice({
    name:"shoppingInfo",
    initialState:{
        product:{}
    },
    reducers:{
        setProduct(state,action){
            return{
                ...state,
                product:action.payload
            }
        }
    }   

})

export const {setProduct} = shoppingInfoSlice.actions  

export default shoppingInfoSlice.reducer