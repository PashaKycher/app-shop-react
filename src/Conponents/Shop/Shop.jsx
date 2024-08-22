import React from 'react'
import style from './Shop.module.scss'
import Products from '../Products/Products'
import ProductInfo from '../Products/ProductInfo/ProductInfo'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Shop() {
  return (
    <div className={style.Shop}>
      <nav>
        <h3>Categories:</h3>
        <Link to='/app-shop-lesson/electronics'>Electronics</Link>
        <Link to='/app-shop-lesson/jewelery'>Jewelery</Link>
        <Link to="/app-shop-lesson/men's clothing">Men's clothing</Link>
        <Link to="/app-shop-lesson/women's clothing">Women's clothing</Link>
      </nav>
      <div className={style.ShopProducts}>
        <Routes>
          <Route path='/app-shop-lesson/' element={<Products />} />
          <Route path='app-shop-lesson/:category' element={<Products/>}/>
          <Route path='app-shop-lesson/products/:productId' element={<ProductInfo />} />
        </Routes>
      </div>
    </div>
  )
}
