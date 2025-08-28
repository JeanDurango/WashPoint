import React, { useState, FormEvent, ChangeEvent } from 'react';
import './cliente.css'; // Asegúrate de que este archivo exista

// Definimos la interfaz para el estado del formulario, garantizando la seguridad de tipos
interface FormData {
    nombreCompleto: string;
    tipoDocumento: string;
    numeroDocumento: string;
    correoElectronico: string;
    telefono: string;
    contrasena: string;
    confirmacionContrasena: string;
}

const SignupForm: React.FC = () => {
    // Usamos useState con la interfaz FormData para un estado seguro
    const [formData, setFormData] = useState<FormData>({
        nombreCompleto: '',
        tipoDocumento: '',
        numeroDocumento: '',
        correoElectronico: '',
        telefono: '',
        contrasena: '',
        confirmacionContrasena: '',
    });

    // Función para manejar los cambios en los inputs
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita la recarga de la página
        console.log('Datos del formulario enviados:', formData);
        
    };

    return (
        <div className="main-container">
            <div className="signup-container">
                <h1>Signup cliente</h1>
                
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="nombreCompleto"
                            placeholder="Nombre completo"
                            value={formData.nombreCompleto}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group-row">
                        <input
                            type="text"
                            name="tipoDocumento"
                            placeholder="Tipo de documento"
                            value={formData.tipoDocumento}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="numeroDocumento"
                            placeholder="Número de documento"
                            value={formData.numeroDocumento}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group-row">
                        <input
                            type="email"
                            name="correoElectronico"
                            placeholder="Correo electrónico"
                            value={formData.correoElectronico}
                            onChange={handleChange}
                        />
                        <input
                            type="tel"
                            name="telefono"
                            placeholder="Teléfono"
                            value={formData.telefono}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group-row">
                        <input
                            type="password"
                            name="contrasena"
                            placeholder="Contraseña"
                            value={formData.contrasena}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="confirmacionContrasena"
                            placeholder="Confirmación de contraseña"
                            value={formData.confirmacionContrasena}
                            onChange={handleChange}
                        />
                    </div>
                    
                        <button type="submit" className="button">Signup</button>
                   
                </form>
            </div>
        </div>
    );
};

export default SignupForm;