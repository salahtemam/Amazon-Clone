import React from 'react'
import { IoMenuOutline } from "react-icons/io5";

function LowerHeader() {
  return (
    <div className='lower__container'>
       <ul>
          <li>
          <IoMenuOutline />
            <p>All</p>
          </li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
       </ul>
    </div>
  )
}

export default LowerHeader
