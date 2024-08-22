import axios from 'axios';
import style from './Products.module.scss';
import React, { useEffect } from 'react'
import { setProducts } from '../../data/shopReducers';
import { useDispatch, useSelector } from 'react-redux';
import ProductCart from './ProductCart/ProductCart';
import { useParams } from 'react-router-dom';

export default function Products() {
    let dispatch = useDispatch()
    let products = useSelector(state => state.shop.products)
    let {category} = useParams();
    category = category ? `/category/${category}` : '';

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products${category}`).then(res => dispatch(setProducts(res.data)))
    }, [category])
  return (
    <div className={style.Products}>
        {
            products.map(product => <ProductCart key={product.id} product={product} />)
        }
    </div>
  )
}
