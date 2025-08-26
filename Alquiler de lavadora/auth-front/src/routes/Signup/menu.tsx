import React from 'react';
import './menu.css';
// Importa el nuevo archivo CSS

const SignupCard = () => {
  return (
    <div className="signup-container">
      <div className="card-login">
        <h2 className="signup-title">Signup</h2>
        <div className="image-container">
          <img
            src="../public/signup.jpg" // Reemplaza con la URL de tu imagen
            alt="Lavandería"
            className="card-image"
          />
        </div>
        <div className="button-container">
          <div className="button-cliente">
            <button className="button">Cliente</button>
          </div>
          <div className="button-proveedor">
            <button className="button">Proveedor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;