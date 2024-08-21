import s from './ProductInfo.module.scss'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { setProduct } from '../../../data/shoppingInfoReeducer';

export default function ProductInfo() {
    let product = useSelector(state => state.shoppingInfo.product);
    let {productId} = useParams();
    let dispatch = useDispatch()
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`).then(res => dispatch(setProduct(res.data)))
    })

    return (
        <div className={s.ProductInfo}>
            <img src={product.image} alt={product.title} />
            <div className={s.description}>
                <h2>{product.title}</h2>
                <h3>Price: {product.price}$</h3>
                <p>{product.description}</p>
            </div>
        </div>
    )
}
