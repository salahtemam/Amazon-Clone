import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import "./header.css"
import LowerHeader from './LowerHeader';
function Header() {
  return (
    <>
      <section>
       <div className='header__container'>
            {/*logo*/}
            <div className='logo__container'>
            <a href="#">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </a>
            </div>
            {/*delivery*/}
              <span>
              <CiLocationOn />
              </span>
              <div className='delivery'>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            <div className='search'>
              {/*search*/}
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" name='' id='' placeholder='search product'/>
              <FaSearch size={25} />
           </div>
         
         {/*right side link*/}
        <div className='order__container'>
            <a href="" className='language'>
              <img src="https://www.shutterstock.com/shutterstock/photos/2477519645/display_1500/stock-vector-american-flag-usa-design-united-states-flag-rendered-usa-flag-the-usa-national-flag-2477519645.jpg" alt="" /> 
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a> 
         
         {/*three components*/}
         <a href="">
          <div>
            <p>Sign In</p>
            <span>Account & Lists</span>
          </div>
         </a>
         {/*orders*/}
         <a href="">
           <p>returns</p>
           <span>& Orders</span>
         </a>
         {/*cart*/}
         <a className='cart'>
           <FaShoppingCart size={35} />
           <span>0</span>
         </a>
       </div>
     </div>
    </section>
    <LowerHeader/>
    </>
  )
}

export default Header
