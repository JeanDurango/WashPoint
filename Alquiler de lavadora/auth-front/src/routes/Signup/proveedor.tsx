import React, { useState, ChangeEvent } from 'react';
import './proveedor.css';


const SignupProveedor: React.FC = () => {
const [rutFilePreview, setRutFilePreview] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setRutFilePreview(URL.createObjectURL(file));
    } else {
      setRutFilePreview(null);
    }
  };
  return (
    <div className="main-container">
      <div className="signup-container">
        <h1>Signup Proveedor</h1>
        <form>
          {/* Campo Razón social, ahora con un input real */}
          <div className="input-group">
            <input type="text" placeholder="Razón social" />
          </div>
          
          {/* Grupos de inputs en fila */}
          <div className="input-group-row">
            <input type="text" placeholder="NIT" />
            <input type="tel" placeholder="Telefono" />
          </div>
          <div className="input-group-row">
            <input type="email" placeholder="Correo electrónico" />
            <input type="password" placeholder="Contraseña" />
          </div>
          
          <div className="input-group-row">
            <input type="password" placeholder="Confirmación de contraseña" />
            
            {/* Contenedor para el input del RUT */}
              <div className="rut-upload-wrapper">
              <label htmlFor="rut-file-upload">
                <div className="rut-upload-box">
                  {rutFilePreview ? (
                    <img src={rutFilePreview} alt="Previsualización del RUT" className="rut-preview-image" />
                  ) : (
                    <>
                      <div className="rut-icon">
                        <img src="/icon.png" alt="Añadir RUT" />
                      </div>
                      <span className="rut-label">Añadir RUT</span>
                    </>
                  )}
                </div>
              </label>
              <input 
                id="rut-file-upload" 
                type="file" 
                className="rut-input" 
                onChange={handleFileChange}
              />
            </div>
          </div>
          
          {/* Contenedor para el botón de envío */}
         
            <button className="button">Signup</button>
          
        </form>
      </div>
    </div>
  );
};

export default SignupProveedor;