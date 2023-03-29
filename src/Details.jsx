import React from "react";
import "./Details.css";
import zanzibar from "./zanzibar.png";

function Details() {
  return (
    <div className="details-card-container">
      <div className="details-card">
        <div className="details-card-head">
          <div className="details-actions-container">
            <p>Volver</p>
            <div className="details-icon-container">
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>
          <figure className="details-img-container">
            <img src={zanzibar} alt="" />
          </figure>
        </div>
        <div className="details-card-body">
          <h1>Planta Decorativa</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            excepturi, modi laborum tenetur deserunt nihil debitis ullam
            provident nisi aut architecto velit quod asperiores corporis
            obcaecati, labore vitae? Obcaecati, ipsa.
          </p>
          <p className="price">$9990</p>
          <button>Agregar al Carro</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
