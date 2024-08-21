import React from 'react'
import style from './Shop.module.scss'
import Products from '../Products/Products'
import ProductInfo from '../Products/ProductInfo/ProductInfo'
import { Route, Routes } from 'react-router-dom'

export default function Shop() {
  return (
    <div className={style.Shop}>
        <nav>
            <h3>Categories</h3>
            <a href="#">All</a>
            <a href="#">All</a>
            <a href="#">All</a>
            <a href="#">All</a>
            <a href="#">All</a>
            <a href="#">All</a>
        </nav>
        <div className={style.ShopProducts}>
            <Routes>
              <Route path='/' element={<Products />} />
              <Route path='/products/:productId' element={<ProductInfo />} />
            </Routes>
        </div>
    </div>
  )
}
