import React from 'react'
import style from './ProdectCart.module.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../../data/shoppingCartReducer'

export default function ProductCart({ product }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const ShowMoreHandler = () => {
    navigate(`/products/${product.id}`);
  };

  const AddProductToCartHandler = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className={style.Product}>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <h2>{product.title}</h2>
      <h3>{product.price}$</h3>
      <button onClick={ShowMoreHandler}>Show more...</button>
      <button onClick={() => AddProductToCartHandler()}>Add to Cart</button>
    </div>
  )
}
