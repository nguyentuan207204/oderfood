import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../components/Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, food_list, removeFromCart } = useContext(StoreContext);
  
  const navigate=useNavigate()
  // Tính tổng tiền giỏ hàng
  const subtotal = food_list.reduce((total, item) => {
    return total + (cartItem[item._id] > 0 ? item.price * cartItem[item._id] : 0);
  }, 0);
  const deliveryFee = subtotal > 0 ? 2 : 0;
  const totalAmount = subtotal + deliveryFee;

  return (
    <div className="cart">
      <div className="cart__items">
        <div className="cart__items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={item._id} className="cart__items-title cart__items-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <p>{cartItem[item._id]}</p>
                <p>${(item.price * cartItem[item._id]).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart__bottom">
        <div className="cart__total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart__total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="cart__total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <div className="cart__total-details">
              <b>Total</b>
              <b>${totalAmount.toFixed(2)}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/oder')} disabled={subtotal === 0}>PROCEED TO CHECKOUT</button>
        </div>
      <div className="cart__promocode">
        <div>
          <p>If you have a promo code, enter it here:</p>
          <div className="cart__promocode-input">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Cart;
