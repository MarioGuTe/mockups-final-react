import React from "react";
import styles from "./Details.module.css";
import zanzibar from "./zanzibar.png";

function Details() {
  return (
    <div className={styles.detailsCardContainer}>
      <div className={styles.detailsCard}>
        <div className={styles.detailsCardHead}>
          <div className={styles.detailsActionsContainer}>
            <p>Volver</p>
            <div className={styles.detailsIconContainer}>
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>
          <figure className={styles.detailsImgContainer}>
            <img src={zanzibar} alt="" />
          </figure>
        </div>
        <div className={styles.detailsCardBody}>
          <h1>Planta Decorativa</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            excepturi, modi laborum tenetur deserunt nihil debitis ullam
            provident nisi aut architecto velit quod asperiores corporis
            obcaecati, labore vitae? Obcaecati, ipsa.
          </p>
          <p className={styles.price}>$9990</p>
          <button className={styles.detailsButton}>Agregar al Carro</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
