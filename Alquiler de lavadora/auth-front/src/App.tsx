import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import SignupCard from "./routes/Signup/menu";
import SignupForm from "./routes/Signup/cliente";
import './App.css'; 
import SignupProveedor from './routes/Signup/proveedor';

const App = () => {
  return (
    <>
      <SignupCard />
      <Routes>

        <Route path="/signup-cliente" element={<SignupForm />} />
        <Route path="/signup-proveedor" element={<SignupProveedor />} />
      </Routes>
    </>
  );
};

export default App;