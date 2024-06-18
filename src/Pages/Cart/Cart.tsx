import React, { useContext } from 'react'
import './Cart.scss'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

  const { cartItems, product_details_list,addToCart,removeFromCart,getTotalCartAmount,url } = useContext(StoreContext)

  const onChangeHandler =  () => {
    if(getTotalCartAmount() === 0) {
      alert("At least 1 item in cart to proceed")
    } 
  }

  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Action</p>
        </div>
        <br />
        <hr />
        {product_details_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <div className='action'>
                    <p onClick={() => removeFromCart(item._id)} className='action-minus'>-</p>
                    <p onClick={() => addToCart(item._id)} className='action-plus'>+</p>
                  </div>

                </div>
                <hr />
              </div>

            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() ===0?0:(getTotalCartAmount() >0?10:0)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + (getTotalCartAmount() ===0?0:(getTotalCartAmount() >0?10:0))}</b>
            </div>
          </div>
          <button onClick={()=>getTotalCartAmount()===0?alert("At least 1 item in cart to proceed"):navigate('/order')}>PROCEED TO CHECK</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart