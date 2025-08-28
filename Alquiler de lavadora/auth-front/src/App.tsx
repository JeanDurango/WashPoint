import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import SignupCard from "./routes/Signup/menu";
import SignupForm from "./routes/Signup/cliente";
import './App.css'; 

const App = () => {
  return (
    <>
      <SignupCard />
      <Routes>

        <Route path="/signup-cliente" element={<SignupForm />} />
      </Routes>
    </>
  );
};

export default App;