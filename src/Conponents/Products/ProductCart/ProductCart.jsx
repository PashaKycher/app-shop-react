import React from 'react'
import style from './ProdectCart.module.scss'
import { useNavigate } from 'react-router-dom'

export default function ProductCart({ product }) {
  let navigate = useNavigate();

  const ShowMoreHandler = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className={style.Product}>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <h2>{product.title}</h2>
      <h3>{product.price}$</h3>
      <button onClick={ShowMoreHandler}>Show more...</button>
      <button>Add to Cart</button>
    </div>
  )
}
