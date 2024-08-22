import s from './ShoppingCart.module.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductInCart from './ProductInCart/ProductInCart'

export default function ShoppingCart() {
    let productsInCart = useSelector(state => state.shoppingCart.productsInCart);
    return (
        <div className={s.ShoppingCartNew}>
            <div className={s.container}>
                <div className={s.inputs}>
                    <h3>Name:</h3>
                    <input type="text" placeholder='enter name' />
                    <h3>Email:</h3>
                    <input type="text" placeholder='enter e-mail' />
                    <h3>Phone:</h3>
                    <input type="text" placeholder='enter phone number' />
                    <h3>Address:</h3>
                    <input type="text" placeholder='enter address' />
                </div>
                <div className={s.products}>
                    {
                        productsInCart.map((ProductinCart) => <ProductInCart key={ProductinCart.id} ProductinCart={ProductinCart} />)
                    }
                </div>
            </div>
            <div className={s.totalPrice}>
                <h2>Total price: {productsInCart.reduce((acc, productsInCart) => acc + (productsInCart.price * productsInCart.counter), 0).toFixed(2)}</h2>
                <button>Order</button>
            </div>
        </div>
    )
}
