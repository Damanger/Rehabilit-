import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Style from '../assets/css/inicio.module.css'

const Inicio = () =>{
    
    return (
        <>
            <NavBar/>
                <section>
                    <div className={Style.figura}></div>
                </section>
            <Footer/>
        </>
    );
};

export default Inicio