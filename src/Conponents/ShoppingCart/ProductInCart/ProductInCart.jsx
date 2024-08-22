import s from './ProductInCart.module.scss'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeProductFromCart, addSetCount, remSetCount } from '../../../data/shoppingCartReducer'

export default function ProductInCart({ ProductinCart }) {

    let dispatch = useDispatch();

    const removeProductFromCartHandler = () => {
        dispatch(removeProductFromCart(ProductinCart.id));
    }

    const AddClickHandler = () => {
        dispatch(addSetCount(ProductinCart.id));
    }

    const RemClickHandler = () => {
        dispatch(remSetCount(ProductinCart.id));
    }


    return (
        <div className={s.ProductInCart}>
            <img src={ProductinCart.image} alt={ProductinCart.title} />
            <div>
                <h1>{ProductinCart.title}</h1>
                <p>{ProductinCart.description}</p>
                <h2>{ProductinCart.counter}</h2>
                <button onClick={AddClickHandler}>+</button>
                <button onClick={RemClickHandler}>-</button>
                <button onClick={removeProductFromCartHandler}>Remove / Drop</button>
            </div>
        </div>
    )
}
