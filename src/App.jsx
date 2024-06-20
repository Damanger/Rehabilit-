import React, { useState } from 'react';
import './App.css';
import Inicio from './components/Inicio'
import AboutUs from './components/AboutUs'
import Mapa from './components/Mapa'
import Contacto from './components/Contacto';
import Error from './components/Error'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/info" element={<AboutUs/>}/>
          <Route path="/mapa" element={<Mapa/>}/>
          <Route path="*" element={<><Error/><Navigate to="/no-encontrado" replace /></>}/>
        </Routes>
        <Contacto/>
      </Router>
    </div>
  );
}

export default App;
