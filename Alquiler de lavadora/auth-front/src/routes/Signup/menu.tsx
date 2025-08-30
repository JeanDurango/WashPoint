import React from 'react';
import './menu.css'; // Importa el nuevo archivo CSS
import { useNavigate } from 'react-router-dom';

const SignupCard = () => {
  const navigate = useNavigate();
  const Navegatecliente = () => {
    navigate("/signup-cliente");
  };

  const Navegateproveedor = () => {
    navigate("/signup-proveedor");
  };
  return (
    <div className="signup-container">
      <div className="card-login">
        <h2 className="signup-title">Signup</h2>
        <div className="image-container">
          <img
            src="/signup.jpg" // Reemplaza con la URL de tu imagen
            alt="Lavandería"
            className="card-image"
          />
        </div>
        <div className="button-container">
          <div className="button-cliente">
            <button onClick={Navegatecliente} className="button">Cliente</button>
          </div>
          <div className="button-proveedor">
            <button onClick={Navegateproveedor} className="button">Proveedor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;