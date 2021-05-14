import "./ShoppingCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

export default function ShoppingCart({
  cartItem,
  incrementQty,
  decrementQty,
  addCoupon,
  setCoupon,
  coupon,
  isSuccess,
  deleteCoupon,
  discount,
  calculateDiscount,
}) {
  // eslint-disable-next-line
  const [price, setPrice] = useState(cartItem.price);
  const [localCoupon, setLocalCoupon] = useState("");
  useEffect(() => {
    setPrice(cartItem.price);
  }, [cartItem]);

  return (
    <div className="ShoppingCart">
      <h2>
        Shopping Cart <FontAwesomeIcon icon={faShoppingCart} />
      </h2>
      <div className="ShoppingCart-contents">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
            {cartItem.map((listValue, index) => {
              console.log(listValue.name);
              return (
                <tr key={index}>
                  <td>
                    {listValue.name} ${listValue.price}
                  </td>
                  <td>
                    <button onClick={() => decrementQty(listValue)}>-</button>
                    <input type="number" value={listValue.count} />
                    <button onClick={() => incrementQty(listValue)}>+</button>
                  </td>
                  <td>{listValue.count * listValue.price} $</td>
                </tr>
              );
            })}
          </thead>
          <tbody>
            <tr>
              <td colSpan="2"></td>
              <td>Discount: {discount} $</td>
            </tr>
            <tr>
              <td colSpan="2"></td>
              <td>
                Total:{" "}
                {cartItem.reduce((a, c) => a + c.price * c.count, 0) - discount}{" "}
                $
              </td>
            </tr>
            <tr>
              <td colSpan="1"></td>
              <td>
                {coupon}
                {coupon !== "" && <button onClick={deleteCoupon}>x</button>}
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <label htmlFor="coupon">Coupon</label>
                <input
                  id="coupon"
                  type="text"
                  defaultValue=""
                  onChange={(event) => setLocalCoupon(event.target.value)}
                />
                <button onClick={() => addCoupon(localCoupon)}>Apply</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
