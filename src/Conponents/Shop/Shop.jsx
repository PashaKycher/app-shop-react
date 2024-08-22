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
        <Link to='/app-shop-react/electronics'>Electronics</Link>
        <Link to='/app-shop-react/jewelery'>Jewelery</Link>
        <Link to="/app-shop-react/men's clothing">Men's clothing</Link>
        <Link to="/app-shop-react/women's clothing">Women's clothing</Link>
      </nav>
      <div className={style.ShopProducts}>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/:category' element={<Products/>}/>
          <Route path='/products/:productId' element={<ProductInfo />} />
        </Routes>
      </div>
    </div>
  )
}
