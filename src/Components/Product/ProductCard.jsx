import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import './product.css'


function ProductCard({product}) {
  const {image,title,id,rating,price}=product;
  return (
    <div className='card__container'>
       
       <a href="">
        <img src={image} alt="" />
       </a>
       <div>
          <h3>{title}</h3>
          <div className='rating'>
              {/*rating*/}
              <Rating value={rating.rate} precision={0.1}/>
              {/*rating counter*/}
              <small>{rating.count}</small>
          </div>
          <div>
            {/*price*/}
            <CurrencyFormat amount={price}/>
          </div>
          <button className='button'>add to cart</button>
       </div>
    
    </div>
  )
}

export default ProductCard
