import React, { useState } from 'react';
import './App.css';
import Cargando from './componentes/Cargando';
import NavBar from './componentes/NavBar';
import Inicio from './componentes/Inicio'
import AboutUs from './componentes/AboutUs'
import Contacto from './componentes/Contacto';
import Error from './componentes/Error'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <div className="App">
      <Router>
        <NavBar/>
        {isLoading ? (
        <Cargando imagen="re2.jpg" />
      ):(
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/info" element={<AboutUs/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="*" element={<><Error/><Navigate to="/not-found" replace /></>}/>
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
