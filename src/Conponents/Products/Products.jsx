import axios from 'axios';
import style from './Products.module.scss';
import React, { useEffect } from 'react'
import { setProducts } from '../../data/shopReducers';
import { useDispatch, useSelector } from 'react-redux';
import ProductCart from './ProductCart/ProductCart';

export default function Products() {
    let dispatch = useDispatch()
    let products = useSelector(state => state.shop.products)
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(res => dispatch(setProducts(res.data)))
    }, [])
  return (
    <div className={style.Products}>
        {
            products.map(product => <ProductCart key={product.id} product={product} />)
        }
    </div>
  )
}
