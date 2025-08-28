import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import SignupCard from "./routes/Signup/menu";
import SignupForm from "./routes/Signup/cliente";
import './App.css'; 

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<SignupCard />} />
        <Route path="/otra-pagina" element={<SignupForm />} />
      </Routes>
  );
};

export default App;