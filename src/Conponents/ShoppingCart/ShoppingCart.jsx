import s from './ShoppingCart.module.scss'
import React from 'react'

export default function ShoppingCart() {
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
            </div>
        </div>
    )
}
