import React from "react";
import zanzibar from "./zanzibar.png";
import "./Cart.css";

function Cart() {
  return (
    <div className="cart-main-container">
      <div className="items-section">
        <h1>Carro de compras</h1>
        <div className="card-product">
          <figure>
            <img src={zanzibar} alt="" />
          </figure>
          <div className="card-description">
            <h2>Planta decorativa</h2>
            <p>$ 9990</p>
          </div>
          <div className="product-qty">
            <button className="sub">-</button>
            <p>1</p>
            <button className="add">+</button>
          </div>
        </div>
        <div className="card-product">
          <figure>
            <img src={zanzibar} alt="" />
          </figure>
          <div className="card-description">
            <h2>Planta decorativa</h2>
            <p>$ 9990</p>
          </div>
          <div className="product-qty">
            <button className="sub">-</button>
            <p>1</p>
            <button className="add">+</button>
          </div>
        </div>
      </div>
      <div className="checkout-container">
        <div className="checkout-card">
          <div className="checkout-text">
            <p>Total</p>
            <p>$ 19980</p>
          </div>
          <div className="checkout-btn-container">
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
