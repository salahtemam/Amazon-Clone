import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import './product.css'
function Product() {
    const[products,setProducts]=useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
          setProducts(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[]

    )
  return (
   <section className='product__container'>
       {
        products.map((singleProduct)=>{
            return <ProductCard product={singleProduct} key={singleProduct.id}/>
        })
       }
   </section>
  )
}

export default Product
