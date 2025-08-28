import React from 'react';
import './menu.css';
import { useNavigate } from "react-router-dom";


const SignupCard= () => {
  const navigate = useNavigate();
  const Navegatecliente = () => {
    navigate("/signup-cliente"); 
  };

  return (
    <div className="signup-container">
      <div className="card-login">
        <h2 className="signup-title">Signup</h2>
        <div className="image-container">
          <img
            src="../public/signup.jpg" 
            alt="Lavandería"
            className="card-image"
          />
        </div>
        <div className="button-container">
          <div className="button-cliente">
            <button
              onClick={Navegatecliente}
              className="button"
            >
            Cliente
          </button>
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