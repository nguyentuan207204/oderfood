import React, { useContext } from 'react'
import './PlaceOder.css'
import { StoreContext } from '../../components/Context/StoreContext'
const PlaceOder = () => {
  const getTotalCartAmount = useContext(StoreContext)
  return (
    <form className='place__oder'>
       <div className='place__oder-left'>
         <p>Delivery Information</p>
         <div className='multi-fields'>
          <input type='text' placeholder='First name'/>
          <input type='text' placeholder='Last name'/>

         </div>
         <input type="email" placeholder='Email address' />
         <input type="text " placeholder='Street' />
         <div className='multi-fields'>
          <input type='text' placeholder='City'/>
          <input type='text' placeholder='State'/>

         </div>
         <div className='multi-fields'>
          <input type='text' placeholder='Zip code'/>
          <input type='text' placeholder='Country'/>

         </div>
         <input type="text" placeholder='phone' />
       </div>
        
       <div className='place__oder-right'>
       <div className="cart__total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart__total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart__total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <div className="cart__total-details">
              <b>Total</b>
              <p>${getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
       </div>
    </form>
  )
}

export default PlaceOder
