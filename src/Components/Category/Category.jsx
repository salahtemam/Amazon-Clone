import React from 'react'
import {CategoryInfos} from "./CategoryfullInfo"
import CategoryCard from './CategoryCard'
import "./category.css"

function Category() {
  return (
    <section className='category__container'> 
       {
        CategoryInfos.map((infos)=>(
            <CategoryCard data={infos}/>
         
        ))
        
       }
    </section>
  )
}

export default Category
