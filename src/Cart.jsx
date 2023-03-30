import React from "react";
import zanzibar from "./zanzibar.png";
import styles from "./Cart.module.css";

function Cart() {
  return (
    <>
      <nav>hola</nav>
      <div className={styles.cartMainContainer}>
        <div className={styles.itemsSection}>
          <h1>Carro de compras</h1>
          <div className={styles.cardProduct}>
            <figure>
              <img src={zanzibar} alt="" />
            </figure>
            <div className={styles.cardDescription}>
              <h2>Planta decorativa</h2>
              <p>$ 9990</p>
            </div>
            <div className={styles.productQty}>
              <button className={styles.sub}>-</button>
              <p>1</p>
              <button className={styles.add}>+</button>
            </div>
          </div>
          <div className={styles.cardProduct}>
            <figure>
              <img src={zanzibar} alt="" />
            </figure>
            <div className={styles.cardDescription}>
              <h2>Planta decorativa</h2>
              <p>$ 9990</p>
            </div>
            <div className={styles.productQty}>
              <button className={styles.sub}>-</button>
              <p>1</p>
              <button className={styles.add}>+</button>
            </div>
          </div>
        </div>
        <div className={styles.checkoutContainer}>
          <div className={styles.checkoutCard}>
            <div className={styles.checkoutText}>
              <p>Total</p>
              <p>$ 19980</p>
            </div>
            <div className={styles.btnContainer}>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <footer>hola</footer>
    </>
  );
}

export default Cart;
