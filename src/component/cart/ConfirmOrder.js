import React from "react";
import CheckOutSetup from "./CheckOutSetup";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ConfirmOrder() {
  const navigate = useNavigate()
    const { shippingInfo, cartItems } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    // calculate order price
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shippingPrice = itemsPrice > 200 ? 0 : 25
    const taxPrice = Number((0.05 * itemsPrice).toFixed(2))
    const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2)

    const proceed_to_payment = ()=>{
      const data = {
        itemsPrice:itemsPrice.toFixed(2),
        shippingPrice,
        taxPrice,
        totalPrice
      }
      sessionStorage.setItem('orderInfo', JSON.stringify(data))
        navigate('/payment')
    }
  return (
    <>
      <CheckOutSetup shipping ConfirmOrder />
      <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8 mt-5 order-confirm">
          <h4 className="mb-3">Shipping Info</h4>
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Phone:</b> {shippingInfo.phoneNo}
          </p>
          <p className="mb-4">
            <b>Address:</b> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.postalcode}
          </p>

          <hr />
          <h4 className="mt-4">Your Cart Items:</h4>

          <hr />
          {cartItems.map((Items) => (
          <div className="cart-item my-1">
            <div className="row">
              <div className="col-3 col-lg-2">
                <img
                  src={Items.image}
                  alt="Laptop"
                  height="45"
                  width="65"
                />
              </div>

              <div className="col-3 col-lg-3">
                <Link to="#">{Items.name}</Link>
              </div>

              <div className="col-2 col-lg-2">
                <Link to="#">{Items.quantity}</Link>
              </div>
              <div className="col-2 col-lg-2">
                <Link to="#">₹{Items.price}</Link>
              </div>

              <div className="col-2 col-lg-3 mt-4 mt-lg-0">
                <p>
                <b>{`₹${Items.quantity * Items.price}`}</b>
                </p>
              </div>
            </div>
          </div>
          ))}

          <hr />
        </div>
        <div className="col-12 col-lg-3 my-4">
          <div id="order_summary">
            <h4>Order Summary</h4>
            <hr />
            <p>
              Subtotal: <span className="order-summary-values">{itemsPrice}</span>
            </p>
            <p>
              Shipping: <span className="order-summary-values">{shippingPrice}</span>
            </p>
            <p>
              Tax: <span className="order-summary-values">{taxPrice}</span>
            </p>

            <hr />

            <p>
              Total: <span className="order-summary-values">{totalPrice}</span>
            </p>

            <hr />
            <button id="checkout_btn" className="btn btn-primary btn-block" onClick={proceed_to_payment}>
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ConfirmOrder;
