import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../components/Context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext); // Destructuring để lấy hàm

  const subtotal = getTotalCartAmount(); // Gọi hàm để lấy tổng tiền
  const deliveryFee = subtotal > 0 ? 2 : 0; // Phí giao hàng chỉ áp dụng khi có đơn hàng
  const total = subtotal + deliveryFee;

  return (
    <form className="place__order"> {/* Sửa lỗi chính tả */}
      <div className="place__order-left">
        <p>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      <div className="place__order-right">
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
              <b>${total.toFixed(2)}</b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;