import React, { useState } from 'react';
import './App.css';
import Cargando from './componentes/Cargando';
import NavBar from './componentes/NavBar';
import Inicio from './componentes/Inicio'
import AboutUs from './componentes/AboutUs'
import Mapa from './componentes/Mapa'
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
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
        <>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/info" element={<AboutUs/>}/>
            <Route path="/mapa" element={<Mapa/>}/>
            <Route path="*" element={<><Error/><Navigate to="/no-encontrado" replace /></>}/>
          </Routes>
          <Contacto/>
          <Footer/>
        </>
        )}
      </Router>
    </div>
  );
}

export default App;
